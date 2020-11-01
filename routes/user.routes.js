const express = require("express");
const {
  isLoggedIn,
  unvalidEmail,
  unvalidPassword,
} = require("../helpers/auth-helpers");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;

const UserModel = require("../models/User.model");
const HorseModel = require("../models/Horse.model");

//Get all the informations from 1 user
//FULL ROUTE => /user/:userID
router.get("/:userID", isLoggedIn, (req, res) => {
  UserModel.findById(req.params.userID)
    .populate("horses")
    .then((user) => res.status(200).json(user))
    .catch((err) => console.log("In /user/:userID", err));
});

//Update users informations
//FULL ROUTE => /user/:userID
router.patch("/:userID", isLoggedIn, (req, res) => {
  UserModel.findById(req.params.userID)
    .then((user) => {
      const { username, email, password, newPassword } = req.body;
      const updatedUser = {};

      if (username && username !== "") updatedUser.username = username;

      if (email) {
        unvalidEmail(email)
          ? res.status(500).json({
              errorMessage: "Format de l'email incorrect",
            })
          : (updatedUser.email = email);
      }

      if (newPassword && newPassword !== "") {
        if (password && password !== "") {
          bcrypt
            .compare(password, user.passwordHash)
            .then((doesItMatch) => {
              if (doesItMatch) {
                if (unvalidPassword(newPassword)) {
                  res.status(500).json({
                    errorMessage:
                      "Le nouveau mot de passe doit contenir au moins 8 caractères dont au moins un chiffre et une majuscule.",
                  });
                } else {
                  bcrypt
                    .genSalt(12)
                    .then((salt) => {
                      bcrypt
                        .hash(newPassword, salt)
                        .then((newPasswordHash) => {
                          updatedUser.passwordHash = newPasswordHash;
                          UserModel.findByIdAndUpdate(req.params.userID, {
                            $set: updatedUser,
                          })
                            .then((user) => {
                              user.passwordHash = "***";
                              req.session.loggedInUser = user;
                              res.status(200).json(user);
                            })
                            .catch((err) => console.log(err));
                        })
                        .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
                }
              } else {
                res.status(500).json({
                  errorMessage: "Mot de passe actuel incorrect",
                });
              }
            })
            .catch((err) => console.log(err));
        } else {
          res.status(500).json({
            errorMessage:
              "Saisissez le mot de passe actuel pour pouvoir en saisir un nouveau",
          });
        }
      } else {
        UserModel.findByIdAndUpdate(req.params.userID, { $set: updatedUser })
          .then((user) => res.status(200).json(user))
          .catch((err) => {
            console.log(err)
            if(err.code === 11000 && "email" in err.keyPattern){
              res.status(500).json({
                errorMessage:
                  "Cet email est déjà utilisé.",
              });
            }
          });
      }
    })
    .catch((err) => console.log(err));
});

//Delete user account
//FULL ROUTE => /user/:userID
router.delete("/:userID", isLoggedIn, (req, res) => {
  UserModel.findById(req.params.userID)
    .then((user) => {
      user.horses.forEach(horse => {
        HorseModel.findByIdAndDelete(horse)
          .then((horse) => {
            horse.pictures.forEach(picture => {
              console.log(picture)
              let publicID = picture.slice(-23);
              publicID = publicID.slice(0, 20);
              //Destroying image action
            })
          })
          .catch((err) => console.log("Error while deleting horses", err))
      })
      UserModel.findByIdAndDelete(req.params.userID)
        .then((response) => res.status(200).json(response))
        .catch((err) => {
          res.status(500).json({
            error:'Something went wrong',
            message: err
          })
        })
    })
    .catch((err) => console.log("Error while finding user", err))
})

module.exports = router;
