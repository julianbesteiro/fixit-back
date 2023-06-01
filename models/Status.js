const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["open", "assigned", "sent", "solved", "closed"],
    required: true,
  },
});

const Status = mongoose.model("Status", statusSchema);

module.exports = statusSchema;
