const mongoose = require("mongoose");
const { User } = require("../models");

const signup = async (req, res) => {
  try {
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
      return res.sendStatus(401);
    }

    const isValid = await user.validatePassword(req.body.password);
    console.log("isvalid", isValid);
    if (!isValid) {
      return res.sendStatus(401);
    }

    const { id, email, isAdmin, name } = user;
    // const token = generateToken({ id, name, isAdmin, email });
    // res.cookie("token", token);
    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  signup,
  login,
};
