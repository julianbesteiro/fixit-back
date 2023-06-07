const mongoose = require("mongoose");
const { Case, User } = require("../models");

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

//admin

const getAll = async (req, res) => {
  try {
    const page = req.query.p || 0;
    const casesPerPage = 10;

    const allCases = await Case.find()
      .sort({ startingDate: -1 })
      .skip(page * casesPerPage)
      .limit(casesPerPage);

    res.status(200).json(allCases);
  } catch (err) {
    res.status(404).send(err);
  }
};

const userCases = async (req, res) => {
  try {
    const userID = req.params.id;
    const userCases = await Case.find({ user: userID });
    if (userCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    res.status(200).json(userCases);
  } catch (err) {
    res.status(404).send(err);
  }
};
const ownerCases = async (req, res) => {
  try {
    const ownerID = req.params.id;
    const ownerCases = await Case.find({ owner: ownerID });
    if (ownerCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    res.status(200).json(ownerCases);
  } catch (err) {
    res.status(404).send(err);
  }
};

const filterCases = async (req, res) => {
  try {
    const { status, period, device, office } = req.query;

    const currentDate = new Date();

    let startDate;
    if (period) {
      switch (period) {
        case "15_days":
          startDate = new Date(
            currentDate.getTime() - 15 * 24 * 60 * 60 * 1000
          );
          break;
        case "1_month":
          startDate = new Date(
            currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
          );
          break;
        case "6_months":
          startDate = new Date(
            currentDate.getTime() - 6 * 30 * 24 * 60 * 60 * 1000
          );
          break;
        default:
          startDate = 0;
          break;
      }
    } else {
      startDate = 0;
    }

    let selectedStatus;
    if (status) {
      if (status === "closed") {
        selectedStatus = ["closed"];
      } else if (status === "pending") {
        selectedStatus = ["open", "in progress", "solved", "partially solved"];
      }
    }

    let filteredCases = [];

    filteredCases = await Case.find({
      $and: [
        office ? { closest_office: office } : {},
        filteredUser ? { user: filteredUser._id } : {},
        selectedStatus ? { status: { $in: selectedStatus } } : {},
        startDate ? { startingDate: { $gte: startDate } } : {},

        device ? { "damaged_equipment.name": device } : {},
      ],
    });

    if (filteredCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    res.status(200).json(filteredCases);
  } catch (err) {
    res.status(404).send(err);
  }
};

const filterCasesGlober = async (req, res) => {
  try {
    const { status, period, device } = req.query;
    const userId = req.params.id;
    const currentDate = new Date();

    let startDate;
    if (period) {
      switch (period) {
        case "15_days":
          startDate = new Date(
            currentDate.getTime() - 15 * 24 * 60 * 60 * 1000
          );
          break;
        case "1_month":
          startDate = new Date(
            currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
          );
          break;
        case "6_months":
          startDate = new Date(
            currentDate.getTime() - 6 * 30 * 24 * 60 * 60 * 1000
          );
          break;
        default:
          startDate = 0;
          break;
      }
    } else {
      startDate = 0;
    }

    let selectedStatus;
    if (status) {
      if (status === "closed") {
        selectedStatus = ["closed"];
      } else if (status === "pending") {
        selectedStatus = ["open", "in progress", "solved", "partially solved"];
      }
    }

    let filteredCases = [];

    filteredCases = await Case.find({
      $and: [
        userId ? { user: userId } : {},
        selectedStatus ? { status: { $in: selectedStatus } } : {},
        startDate ? { startingDate: { $gte: startDate } } : {},

        device ? { "damaged_equipment.name": device } : {},
      ],
    });

    if (filteredCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    res.status(200).json(filteredCases);
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateCase = async (req, res) => {
  try {
    const caseId = req.params.id;
    const updatedCase = req.query;

    await Case.updateOne({ _id: caseId }, { $set: updatedCase });

    res.status(200).send("Case updated");
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  createCase,
  getAll,
  filterCases,
  allDevices,
  filterCasesGlober,
  ownerCases,
  userCases,
  updateCase,
};
