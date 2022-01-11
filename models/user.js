const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");

const user = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

user.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIATETOKEN);
  return token;
};

const User = mongoose.model("User-List", user);

const validate = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("First Name"),
    lastName: joi.string().required().label("Last Name"),
    email: joi.string().email().required().label("Email "),
    password: joi.string().min(6).max(12).required().label("Password"),
  });
  return schema.validate(data);
};
module.exports = { User, validate };
