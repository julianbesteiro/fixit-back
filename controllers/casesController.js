const mongoose = require("mongoose");
const { User, Case } = require("../models");

const createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);

    await newCase.save();

    res.sendStatus(200);
  } catch (err) {
    res.status(404).send(err);
  }
};
module.exports = { createCase };
