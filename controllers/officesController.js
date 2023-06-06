const mongoose = require("mongoose");
const { User, Case, Office } = require("../models");

const createOffice = async (req, res) => {
  try {
    const newOffice = new Office(req.body);
    await newOffice.save();
    res.status(200).json(newOffice);
  } catch (err) {
    res.status(404).send(err);
  }
};

const viewAllOffices = async (req, res) => {
  try {
    const page = req.query.p || 0;
    const officesPerPage = 10;

    const officesList = await Office.find()
      .sort({ name: 1 })
      .skip(page * officesPerPage)
      .limit(officesPerPage);

    res.status(200).json(officesList);
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteOffice = async (req, res) => {
  try {
    const { idOffice } = req.params;

    await Office.deleteOne({ _id: idOffice });

    res.status(200).send("Office deleted");
  } catch (err) {
    res.status(404).send(err);
  }
};

const editOffice = async (req, res) => {
  try {
    const { idOffice } = req.params;
    const updatedOffice = req.body;

    await Office.updateOne({ _id: idOffice }, { $set: updatedOffice });

    res.status(200).send("Office updated");
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  createOffice,
  viewAllOffices,
  deleteOffice,
  editOffice,
};
