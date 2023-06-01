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
    enum: ["open", "assigned", "sent", "solved", "closed"],
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
  startingDate: {
    type: Date,
    default: () => Date.now(),
  },
  solution_date: {
    type: Date,
  },
  closing_date: {
    type: Date,
  },
  reopenings: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Case", caseSchema);
