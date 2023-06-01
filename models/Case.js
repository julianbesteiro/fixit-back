const mongoose = require("mongoose");
const userSchema = require("./User");
const officeSchema = require("./Office");
const equipmentSchema = require("./Equipment");
const statusSchema = require("./Status");

const caseSchema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, required: true },

  homeOffice: {
    type: Boolean,
    required: true,
  },

  damagedEquipment: { type: equipmentSchema, required: true },

  status: { type: statusSchema, required: true },

  owner: { type: mongoose.SchemaTypes.ObjectId, required: true },

  description: {
    type: String,
    required: true,
  },

  closestOffice: { type: officeSchema, required: true },
  startingDate: {
    type: Date,
    required: true,
  },
  solutionDate: {
    type: Date,
    required: true,
  },
  closingDate: {
    type: Date,
    required: true,
  },
  reopenings: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Case = mongoose.model("Case", caseSchema);
module.exports = caseSchema;
