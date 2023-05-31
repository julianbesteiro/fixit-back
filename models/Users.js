const mongoose = require("mongoose");
const addressSchema = require("./Address");
const officeSchema = require("./Office");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
  cellphone: {
    type: Number,
  },
  role: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  address: addressSchema,

  location: {
    type: [Number],
  },
  preferred_office: officeSchema,
});

const User = mongoose.model("User", userSchema);
