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

// const statusFilter = async (req, res) => {
//   try {
//     const { status } = req.params.status;
//     if (status === "pending") {
//       const pendingCases = await Case.find({
//         user: userId,
//         status: { $nin: ["closed"] },
//       }).sort({ startingDate: -1 });
//       res.status(200).json(pendingCases);
//     } else {
//       const pendingCases = await Case.find({
//         status: { $in: ["closed"] },
//       }).sort({ startingDate: -1 });
//       if (!pendingCases) {
//         return res.status(401).json("there are no cases to show");
//       }
//       res.status(200).json(pendingCases);
//     }
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

// const periodFilter = async (req, res) => {
//   try {
//     const { period } = req.params;
//     console.log("period", period);
//     const currentDate = new Date();

//     let startDate;
//     switch (period) {
//       case "15_days":
//         startDate = new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000);
//         break;
//       case "1_month":
//         startDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
//         break;
//       case "6_months":
//         startDate = new Date(
//           currentDate.getTime() - 6 * 30 * 24 * 60 * 60 * 1000
//         );
//         break;
//       default:
//         startDate = null;
//         break;
//     }

//     let filteredCases;

//     if (startDate) {
//       filteredCases = await Case.find({
//         startingDate: { $gte: startDate },
//       }).sort({ startingDate: -1 });

//       if (filteredCases.length === 0) {
//         return res
//           .status(401)
//           .json({ error: "There are no cases in this period." });
//       }
//     } else {
//       filteredCases = await Case.find().sort({ startingDate: -1 });
//     }
//     console.log("filteredcases> ", filteredCases.length);
//     res.status(200).json(filteredCases);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

const userFilter = async (req, res) => {
  try {
    const userEmail = req.params.email;

    const filteredUser = await User.findOne({ email: userEmail });

    if (!filteredUser) {
      return res
        .status(401)
        .json({ error: "there are no cases in this glober history" });
    }
    const filteredCases = await Case.find({ user: filteredUser._id });

    res.status(200).json(filteredCases);
  } catch (error) {
    res.status(404).send(err);
  }
};

const filterCases = async (req, res) => {
  try {
    const { status, period, device } = req.query;

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

module.exports = { createCase, getAll, filterCases, userFilter };