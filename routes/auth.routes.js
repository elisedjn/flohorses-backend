const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const UserModel = require("../models/User.model");

const {
  isLoggedIn,
  signupVerifications,
  hashingPassword,
  loginVerifications,
} = require("../helpers/auth-helpers");

router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  let verification = signupVerifications(username, email, password);
  if (!verification.valid) {
    res.status(500).json({
      errorMessage: verification.errorMessage,
    });
  }
  bcrypt.genSalt(12).then((salt) => {
    bcrypt.hash(password, salt)
      .then((passwordHash) => {
  UserModel.create({ email, username, passwordHash })
    .then((user) => {
      user.passwordHash = "***";
      req.session.loggedInUser = user;
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 11000 && Object.keys(err.keyPattern).includes("email")) {
        res.status(500).json({
          errorMessage:
            "Cet email existe déjà! Merci d'en choisir un autre ou de vous connecter.",
        });
        return;
      } else {
        console.log(err);
        res.status(500).json({
          errorMessage: "Une erreur est apparue... Merci de réessayer",
        });
        return;
      }
    });
  });
});
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let verification = loginVerifications(email, password);
  if (!verification.valid) {
    res.status(500).json({
      errorMessage: verification.errorMessage,
    });
  }

  UserModel.findOne({ email })
    .then((userData) => {
      bcrypt
        .compare(password, userData.passwordHash)
        .then((doesItMatch) => {
          if (doesItMatch) {
            userData.passwordHash = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData);
          } else {
            res.status(500).json({
              errorMessage: "Passwords don't match. Please try again",
            });
            return;
          }
        })
        .catch(() => {
          res.status(500).json({
            errorMessage: "Email format is not correct",
          });
          return;
        });
    })
    //throw an error if the user does not exists
    .catch((err) => {
      res.status(500).json({
        errorMessage: "This user does not exist. Please Sign Up first.",
      });
      return;
    });
});

router.post('/logout', isLoggedIn,  (req, res) => {
  req.session.destroy();
  res.status(204).send();
})

router.get("/user", isLoggedIn, (req, res) => {
res.status(200).json(req.session.loggedInUser);
});

module.exports = router;