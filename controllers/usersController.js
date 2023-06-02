const mongoose = require("mongoose");
const { User } = require("../models");
const { generateToken } = require("../config/token");
const signup = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "The user already exists." });
    }

    const newUser = new User(req.body);
    console.log("newuser ", newUser);
    await newUser.save();
    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ error: "The user doesn't exist." });
    }

    const isValid = await user.validatePassword(req.body.password);

    if (!isValid) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    const { id, email, is_admin, name } = user;

    const token = generateToken({ id, name, is_admin, email });

    res.cookie("token", token);
    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

module.exports = {
  signup,
  login,
  logout,
};
