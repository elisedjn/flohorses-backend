const express = require("express");
const router = express.Router();

const HorseModel = require("../models/Horse.model");
const UserModel = require("../models/User.model");

const { isLoggedIn } = require("../helpers/auth-helpers");
const { dataCleaning } = require("../helpers/horse-helpers");

// Get all the horses from a user
// FULL ROUTE -> /horses/:userID/all
router.get("/:userID/all", isLoggedIn, (req, res) => {
  UserModel.findById(req.params.userID)
    .populate("horses")
    .then((user) => {
      res.status(200).json(user.horses);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        errorMessage: err,
      });
    });
});

// Create a new horse
// FULL ROUTE -> horses/:userID/create
router.post("/:userID/create", isLoggedIn, (req, res) => {
  console.log(req.body)
  const {
    name,
    birthdate,
    breeder,
    owner,
    father,
    mother,
    sex,
    pictures,
  } = req.body;
  HorseModel.create({
    name,
    birthdate,
    breeder,
    owner,
    father,
    mother,
    sex,
    pictures,
  })
    .then((horse) => {
      UserModel.findByIdAndUpdate(req.params.userID, {
        $push: { horses: horse },
      })
        .then(() => {
          res.status(200).json(horse);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: "Something went wrong",
            errorMessage: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        errorMessage: err,
      });
    });
});

// Get the details of one horse
// FULL ROUTE -> horses/:horseID
router.get("/onehorse/:horseID", isLoggedIn, (req, res) => {
  HorseModel.findById(req.params.horseID)
    .then((horse) => res.status(200).json(horse))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        errorMessage: err,
      });
    });
});

// Update the infos part for one horse
// FULL ROUTE -> horses/onehorse/:horseID/infos/edit
router.patch("/onehorse/:horseID/infos/edit", isLoggedIn, (req, res) => {
  let updatedInfos = {};
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== "") updatedInfos[key] = req.body[key];
  });
  HorseModel.findByIdAndUpdate(req.params.horseID, { $set: updatedInfos })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        errorMessage: err,
      });
    });
});

// Update one specific phase part for one horse
// FULL ROUTE -> horses/onehorse/:horseID/:phaseShortName/edit
router.patch(
  "/onehorse/:horseID/:phaseShortName/edit",
  isLoggedIn,
  (req, res) => {
    console.log(req.body);
    const id = req.params.horseID;
    const shortName = req.params.phaseShortName;
    const { arrivalDate, departureDate, phaseNotes } = req.body;
    HorseModel.findById(id)
      .then((horse) => {
        const horsePhases = horse.phases;
        let updatedPhases = [];
        horsePhases.forEach((phase, index) => {
          updatedPhases.push(phase);
          if (phase.shortName === shortName) {
            if (arrivalDate) updatedPhases[index].arrivalDate = arrivalDate;
            if (departureDate)
              updatedPhases[index].departureDate = departureDate;
            if (phaseNotes) updatedPhases[index].phaseNotes = phaseNotes;
          }
        });
        HorseModel.findByIdAndUpdate(id, { $set: { phases: updatedPhases } })
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: "Something went wrong",
              errorMessage: err,
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: "Something went wrong",
          errorMessage: err,
        });
      });
  }
);

module.exports = router;
