const mongoose = require("mongoose");
const addressSchema = require("./Address");
const officeSchema = require("./Office");
const caseSchema = require("./Case");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  cellphone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  address: addressSchema,

  location: {
    type: [Number],
    required: true,
  },
  preferred_office: officeSchema,
  cases: caseSchema,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
