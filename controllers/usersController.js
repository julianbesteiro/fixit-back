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
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(203)
        .json({ error: true, message: "Incorrect email or password." });
    }

    const isValid = await user.validatePassword(req.body.password);

    if (!isValid) {
      return res
        .status(203)
        .json({ error: true, message: "Incorrect email or password." });
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

    res.status(200).json({
      token,
      message: "is logged",
      error: false,
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
    res.status(500).send(err);
  }
};

const lastCase = async (req, res) => {
  try {
    const userId = req.params.id;
    const lastCase = await Case.find({ user: userId })
      .sort({ starting_date: -1 })
      .limit(1);

    res.status(200).json(lastCase);
  } catch (err) {
    res.status(500).send(err);
  }
};

const secret = (req, res) => {
  const { payload } = validateToken(req.body.token);

  req.user = payload;

  res.send(payload);
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    await User.updateOne({ _id: userId }, { $set: updatedUser });

    const user = await User.findOne({ _id: userId });
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

    const newToken = generateToken({
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

    res.status(200).send({ message: "The user was updated", data: newToken });
  } catch (err) {
    res.status(500).send(err);
  }
};

const searchUsers = async (req, res) => {
  try {
    const { term, isAdmin } = req.query;
    const page = req.query.p || 0;
    const casesPerPage = 5;

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

      const users = await User.find(query)
        .sort({ starting_date: -1 })
        .skip(page * casesPerPage)
        .limit(casesPerPage);

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
      .sort({ starting_date: -1 })
      .skip(page * usersPerPage)
      .limit(usersPerPage);

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  signup,
  login,
  logout,
  profileData,
  updateUser,
  secret,
  lastCase,
  searchUsers,
  getUsers,
};
