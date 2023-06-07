const mongoose = require("mongoose");
const { User, Case } = require("../models");
const { generateToken, validateToken } = require("../config/token");
const { getAll } = require("./casesController");
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
    res.status(200).json({
      data: {
        id,
        name,
        email,
        cellphone,
        address,
        image,
        location,
        role,
        is_admin,
      },
      message: "is logged",
      error: false,
    });
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

const secret = (req, res) => {
  const { payload } = validateToken(req.cookies.token);
  req.user = payload;

  res.send(payload);
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

const searchUsers = async (req, res) => {
  try {
    const { term, isAdmin } = req.query;

    if (term !== "undefined") {
      let query = {
        $or: [
          { name: { $regex: term, $options: "i" } },
          { lastname: { $regex: term, $options: "i" } },
          { email: { $regex: term, $options: "i" } },
        ],
      };

      if (isAdmin) {
        query = { ...query, is_admin: true };
      }

      const users = await User.find(query);

      if (users.length !== 0) {
        res.json(users);
      } else {
        res.status(401).send("No users matching the search ");
      }
    } else {
      res.status(401).send("No users matching the search");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error searching for users");
  }
};

const getUsers = async (req, res) => {
  try {
    const { isAdmin } = req.query;
    const page = req.query.p || 0;
    const usersPerPage = 5;

    const allUsers = await User.find(isAdmin ? { is_admin: isAdmin } : {})
      .sort({ startingDate: -1 })
      .skip(page * usersPerPage)
      .limit(usersPerPage);

    res.status(200).json(allUsers);
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
  secret,
  lastCase,
  searchUsers,
  getUsers,
};
