const mongoose = require("mongoose");
const addressSchema = require("./Address");

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: addressSchema,
  location: {
    type: [Number],
  },
  map: {
    type: Buffer,
  },
});

const Office = mongoose.model("Office", officeSchema);
