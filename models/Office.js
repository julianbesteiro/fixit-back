const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: [Number],
    required: true,
  },
  open_now: {
    type: Boolean,
    default: false,
  },
  map: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Office", officeSchema);
