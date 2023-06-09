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
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },

  status: {
    type: String,
    enum: [
      "open",
      "in progress",
      "partially solved",
      "solved",
      "in transit to office",
      "in transit to glober",
      "waiting for equipment",
      "waiting for glober",
    ],
    default: "open",
  },

  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },

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
