const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helpers");
const router = express.Router();

const UserModel = require("../models/User.model");

//Get all the informations from 1 user
//FULL ROUTE => /user/:userID
router.get("/:userID", isLoggedIn, (req, res) => {
  UserModel.findById(req.params.userID)
    .populate('horses')
    .then((user) => res.status(200).json(user))
    .catch((err) => console.log("In /user/:userID",err))
})

module.exports = router