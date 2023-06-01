const mongoose = require("mongoose");

const addressSchema = require("./Address");

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: addressSchema },
  location: {
    type: [Number],
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
});

const Office = mongoose.model("Office", officeSchema);
module.exports = officeSchema;
