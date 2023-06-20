const mongoose = require("mongoose");
const { Case, User } = require("../models");
const { validateCredentials } = require("../middlewares/auth");

const createCase = async (req, res) => {
  console.log("reqbody", req.body.issue);
  const { issue } = req.body;

  try {
    const newCase = new Case(issue);

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
      .sort({ starting_date: -1 })
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
    const page = req.query.p || 0;
    const casesPerPage = 10;

    const userCases = await Case.find({ user: userID })
      .sort({ starting_date: -1 })
      .skip(page * casesPerPage)
      .limit(casesPerPage);
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
    const page = req.query.p || 0;
    const casesPerPage = 10;

    const ownerCases = await Case.find({ owner: ownerID })
      .sort({ starting_date: -1 })
      .skip(page * casesPerPage)
      .limit(casesPerPage);
    if (ownerCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    res.status(200).json(ownerCases);
  } catch (err) {
    res.status(404).send(err);
  }
};

const filterCasesGlober = async (req, res) => {
  try {
    const { status, period, device } = req.query;
    const userId = req.params.id;

    const page = req.query.p || 0;
    const casesPerPage = 10;

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
      if (status === "solved") {
        selectedStatus = ["solved"];
      } else if (status === "pending") {
        selectedStatus = ["open", "in progress", "partially solved"];
      }
    }

    let filteredCases = [];

    filteredCases = await Case.find({
      $and: [
        userId ? { user: userId } : {},
        selectedStatus ? { status: { $in: selectedStatus } } : {},
        startDate ? { starting_date: { $gte: startDate } } : {},
        device && device != "all" ? { "damaged_equipment.name": device } : {},
      ],
    })
      .sort({ starting_date: -1 })
      .skip(page * casesPerPage)
      .limit(casesPerPage);
    if (filteredCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    const cantPages = await Case.find({
      $and: [
        userId ? { user: userId } : {},
        selectedStatus ? { status: { $in: selectedStatus } } : {},
        startDate ? { starting_date: { $gte: startDate } } : {},
        device && device != "all" ? { "damaged_equipment.name": device } : {},
      ],
    }).countDocuments();

    res.status(200).json({
      data: filteredCases,
      countPages: Math.ceil(cantPages / casesPerPage),
    });
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

const filterCases = async (req, res) => {
  try {
    const { status, period, device, office } = req.query;
    const page = req.query.p || 0;
    const casesPerPage = 10;

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

    let filteredCases = [];

    filteredCases = await Case.find({
      $and: [
        office ? { closest_office: office } : {},
        status ? { status: status } : {},
        startDate ? { starting_date: { $gte: startDate } } : {},

        device ? { "damaged_equipment.name": device } : {},
      ],
    })
      .sort({ starting_date: -1 })
      .skip(page * casesPerPage)
      .limit(casesPerPage);
    if (filteredCases.length === 0) {
      return res.status(401).json({ error: "There are no matching cases." });
    }

    res.status(200).json(filteredCases);
  } catch (err) {
    res.status(404).send(err);
  }
};

const searchIndividualCase = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Case.findById(id);
    if (!data) {
      return res.status(404).json({ message: "The case wasnst founded" });
    }

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error in the server" });
  }
};

module.exports = {
  createCase,
  getAll,
  allDevices,
  filterCasesGlober,
  ownerCases,
  userCases,
  updateCase,
  filterCases,
  searchIndividualCase,
};
