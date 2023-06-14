const express = require("express");
const router = express.Router();
const users = require("./users");
const offices = require("./offices");
const cases = require("./cases");
const devices = require("./devices");
const maps = require("./maps");
const images = require("./images");

router.use("/users", users);
router.use("/offices", offices);
router.use("/cases", cases);
router.use("/devices", devices);
router.use("/maps", maps);
router.use("/images", images);

module.exports = router;
