const mongoose = require("mongoose");
const { User, Case } = require("../models");
const { generateToken } = require("../config/token");
const signup = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "The user already exists." });
    }

    const newUser = new User(req.body);
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
      return res
        .status(203)
        .json({ error: true, message: "The user doesn't exist." });
    }

    const isValid = await user.validatePassword(req.body.password);

    if (!isValid) {
      return res
        .status(203)
        .json({ error: true, message: "Incorrect password." });
    }

    const { id, email, is_admin, name } = user;

    const token = generateToken({ id, name, is_admin, email });

    res.cookie("token", token);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

const profileData = async (req, res) => {
  try {
    const userId = req.params.id;

    const profileData = await User.findById(userId);

    res.status(200).send(profileData);
  } catch (err) {
    res.status(404).send(err);
  }
};

const casesHistory = async (req, res) => {
  try {
    const userId = req.params.id;
    const casesHistory = await Case.where("user").equals(userId);

    res.status(200).send(casesHistory);
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    await User.updateOne({ _id: userId }, { $set: updatedUser });

    res.status(200).send("User updated");
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  signup,
  login,
  logout,
  profileData,
  casesHistory,
  updateUser,
};
