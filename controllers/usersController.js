const mongoose = require("mongoose");
const { User } = require("../models");
const { generateToken, validateToken } = require("../config/token");
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

    const {
      id,
      name,
      email,
      cellphone,
      address,
      image,
      location,
      role,
      is_admin,
    } = user;

    const token = generateToken({
      id,
      name,
      email,
      cellphone,
      address,
      image,
      location,
      role,
      is_admin,
    });

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

const secret = (req, res) => {
  console.log("coookies ", req.cookies.token);

  const { payload } = validateToken(req.cookies.token);
  req.user = payload;
  console.log("PAYLOAD >> ", payload);
  res.send(payload);
};

module.exports = {
  signup,
  login,
  logout,
  secret,
};
