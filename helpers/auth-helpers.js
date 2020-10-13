const bcrypt = require("bcryptjs");

const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    next();
  } else {
    res.status(401).json({
      errorMessage: "Unauthorized user",
      code: 401,
    });
  }
};

const emailRegex = new RegExp(
  /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
);
const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);

const unvalidEmail = (email) => !emailRegex.test(email);
const unvalidPassword = (password) => !passwordRegex.test(password);

const signupVerifications = (username, email, password) => {
  let answer = { valid: true, errorMessage : ""}

  if (!username || !email || !password) {
    answer.valid = false;
    answer.errorMessage = "Veuillez saisir un pseudo, un email et un mot de passe";
  }

  if (unvalidEmail(email)) {
    answer.valid = false;
    answer.errorMessage = "Le format de l'email est incorrect";
  }

  if (unvalidPassword(password)) {
    answer.valid = false;
    answer.errorMessage =
        "Le mot de passe doit contenir au moins 8 charactères dont un nombre et une majuscule";
  }

  return answer;
};

const hashingPassword = async (password) => {
  let salt = await bcrypt.genSalt(12);
  let hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const loginVerifications = (email, password) => {
  let answer = { valid: true, errorMessage : ""}

  if (!email || !password) {
    answer.valid = false;
    answer.errorMessage = "Veuillez saisir un email et un mot de passe";
  }

  if (unvalidEmail(email)) {
    answer.valid = false;
    answer.errorMessage =  "Le format de l'email est incorrect";
  }

  return answer;
};

module.exports = {
  isLoggedIn,
  signupVerifications,
  hashingPassword,
  loginVerifications,
};
