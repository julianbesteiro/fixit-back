const mongoose = require("mongoose");
const { User, Case } = require("../models");
const { generateToken, validateToken } = require("../config/token");
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

const profileData = async (req, res) => {
  try {
    const userId = req.params.id;

    const profileData = await User.findById(userId);

    res.status(200).json(profileData);
  } catch (err) {
    res.status(404).send(err);
  }
};

const casesHistory = async (req, res) => {
  try {
    const userId = req.params.id;

    const page = req.query.p || 0;
    const casesPerPage = 10;

    const casesHistory = await Case.where("user")
      .equals(userId)
      .sort({ startingDate: -1 })
      .skip(page * casesPerPage)
      .limit(casesPerPage);

    res.status(200).json(casesHistory);
  } catch (err) {
    res.status(404).send(err);
  }
};

const lastCase = async (req, res) => {
  try {
    const userId = req.params.id;
    const lastCase = await Case.find({ user: userId })
      .sort({ startingDate: -1 })
      .limit(1);

    res.status(200).json(lastCase);
  } catch (err) {
    res.status(404).send(err);
  }
};

const caseFilterByStatus = async (req, res) => {
  try {
    const { id, status } = req.params;
    if (status == "pending") {
      const pendingCases = await Case.find({
        user: id,
        status: { $nin: ["closed"] },
      }).sort({ startingDate: -1 });
      res.status(200).json(pendingCases);
    } else {
      const pendingCases = await Case.find({
        user: id,
        status: { $in: ["closed"] },
      }).sort({ startingDate: -1 });
      res.status(200).json(pendingCases);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

const secret = (req, res) => {
  const { payload } = validateToken(req.cookies.token);
  req.user = payload;
  console.log("PAYLOAD >> ", payload);
  res.send(payload);
};

module.exports = {
  signup,
  login,
  logout,
  profileData,
  casesHistory,
  updateUser,
  secret,
  lastCase,
  caseFilterByStatus,
  caseFilterByDevice,
};
