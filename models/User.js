const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /^\S+@\S+.\S+$/,
    unique: true,
    required: true,
  },
  cellphone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  is_admin: {
    type: Boolean,
    //default: false,
  },
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
  },
  address: { type: String, required: true },
  location: {
    type: [Number],
    required: true,
  },
  cases: { type: mongoose.SchemaTypes.ObjectId, ref: "Case" },
  assigned_office: { type: mongoose.SchemaTypes.ObjectId, ref: "Office" },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(8);
    this.salt = salt;
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.validatePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};

module.exports = mongoose.model("User", userSchema);
