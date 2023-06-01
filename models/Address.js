const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
});

const Address = mongoose.model("Address", addressSchema);
module.exports = addressSchema;
