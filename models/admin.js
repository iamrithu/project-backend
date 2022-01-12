const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");

const admin = new mongoose.Schema({
  adminName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

admin.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIATETOKEN);
  return token;
};

const Admin = mongoose.model("Admin-List", admin);

const validate = (data) => {
  const schema = joi.object({
    adminName: joi.string().required().label("First Name"),
    email: joi.string().email().required().label("Email "),
    password: joi.string().min(6).max(12).required().label("Password"),
  });
  return schema.validate(data);
};
module.exports = { Admin, validate };
