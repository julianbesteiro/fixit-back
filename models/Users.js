const mongoose = require("mongoose");
const officeSchema = require("./Office");
const addressSchema = require("./Address");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
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
  address: { type: addressSchema },

  location: {
    type: [Number],
  },
  preferred_office: { type: officeSchema },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(8);
    this.salt = salt;
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.validatePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
