const mongoose = require("mongoose");
const { User, Case, Office } = require("../models");

const createOffice = async (req, res) => {
  try {
    console.log("body", req.body);
    const offices = req.body;
    const allOffices = [];

    for (const office of offices) {
      // Verificar si ya existe una oficina con la misma ubicación
      const existingOffice = await Office.findOne({
        location: office.location,
      });

      if (existingOffice) {
        // La oficina ya existe en la base de datos
        console.log(`La oficina en la ubicación ${office.location} ya existe`);
        allOffices.push(existingOffice);
      } else {
        // Crear una nueva oficina
        const newOffice = new Office(office);
        await newOffice.save();
        allOffices.push(newOffice);
        console.log(`Nueva oficina creada en la ubicación ${office.location}`);
      }
    }

    res.status(200).json(allOffices);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const viewAllOffices = async (req, res) => {
  try {
    const page = parseInt(req.query.p) || 0;
    const officesPerPage = 10;

    const totalOffices = await Office.countDocuments();
    const totalPages = Math.ceil(totalOffices / officesPerPage);

    const officesList = await Office.find()
      .sort({ name: 1 })
      .skip(page * officesPerPage)
      .limit(officesPerPage);

    res.status(200).json({
      totalPages: totalPages,
      offices: officesList,
    });
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
