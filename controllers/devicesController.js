const mongoose = require("mongoose");
const { Device } = require("../models");

const createDevice = async (req, res) => {
  try {
    const newDevice = new Device(req.body);
    await newDevice.save();
    res.status(200).json(newDevice);
  } catch (err) {
    res.status(404).send(err);
  }
};

const viewAllDevices = async (req, res) => {
  try {
    const page = req.query.p || 0;
    const devicesPerPage = 10;

    const devicesList = await Device.find()
      .sort({ name: 1 })
      .skip(page * devicesPerPage)
      .limit(devicesPerPage);

    res.status(200).json(devicesList);
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteDevice = async (req, res) => {
  try {
    const { idDevice } = req.params;

    await Device.deleteOne({ _id: idDevice });

    res.status(200).send("Device deleted");
  } catch (err) {
    res.status(404).send(err);
  }
};

const editDevice = async (req, res) => {
  try {
    const { idDevice } = req.params;
    const updatedDevice = req.body;

    await Device.updateOne({ _id: idDevice }, { $set: updatedDevice });

    res.status(200).send("Device updated");
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  createDevice,
  viewAllDevices,
  deleteDevice,
  editDevice,
};
