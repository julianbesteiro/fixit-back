const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  location: {
    type: [Number],
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Office", officeSchema);
