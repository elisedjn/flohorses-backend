const express = require('express');
const router = express.Router();

const HorseModel = require('../models/Horse.model');
const UserModel = require('../models/User.model');

const { isLoggedIn } = require('../helpers/auth-helpers');
const { dataCleaning } = require('../helpers/horse-helpers');

// Get all the horses from a user 
// FULL ROUTE -> /horses/:userID/all
router.get('/:userID/all', isLoggedIn, (req, res) => {
  UserModel.findById(req.params.userID)
    .populate('horses')
    .then((user) => {
      res.status(200).json(user.horses)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: 'Something went wrong',
        errorMessage: err
      })
    })
});

// Create a new horse
// FULL ROUTE -> horses/:userID/create
router.post('/:userID/create', isLoggedIn, (req, res) => {
  const { name, birthdate, breeder, owner, father, mother, sex, pictures } = req.body;
  HorseModel.create({ name, birthdate, breeder, owner, father, mother, sex, pictures })
    .then((horse) => {
      UserModel.findByIdAndUpdate(req.params.userID, {$push : {horses : horse }})
        .then(() => {
          res.status(200).json(horse)
        })
        .catch((err) => {
          console.log(err)
          res.status(500).json({
            error: 'Something went wrong',
            errorMessage: err
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: 'Something went wrong',
        errorMessage: err
      })
    })
})

// Get the details of one horse
// FULL ROUTE -> horses/:horsesID
router.get('/onehorse/:horseID', isLoggedIn, (req, res) => {
  HorseModel.findById(req.params.horseID)
    .then((horse) => res.status(200).json(horse))
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: 'Something went wrong',
        errorMessage: err
      })
    })
})

module.exports = router;