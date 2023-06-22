const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },

  home_office: {
    type: Boolean,
    required: true,
  },

  damaged_equipment: {
    name: {
      type: String,
      ref: "Device",
      required: true,
    },
    image: {
      type: String,
      default: "https://imgur.com/a/J1R2Ye8",
    },
    location: {
      type: String,
      required: true,
    },
  },

  status: {
    type: String,
    enum: [
      "Open",
      "In progress",
      "Partially solved",
      "Solved",
      "In transit to office",
      "In transit to glober",
      "Waiting for equipment",
      "Waiting for glober",
    ],
    default: "Open",
  },

  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },

  description: {
    type: String,
    required: true,
    minlength: 50,
  },

  closest_office: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Office",
    required: true,
  },
  starting_date: {
    type: Date,
    default: () => Date.now(),
  },
  solution_date: {
    type: Date,
  },
  closing_date: {
    type: Date,
  },
});

module.exports = mongoose.model("Case", caseSchema);
