const mongoose = require("mongoose");
const { Case } = require("../models");

const createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);

    await newCase.save();

    res.status(200).json(newCase);
  } catch (err) {
    res.status(404).send(err);
  }
};

const allDevices = async (req, res) => {
  try {
    const devices = await Case.distinct("damaged_equipment.name", {});

    res.status(200).json(devices);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = { createCase, allDevices };
