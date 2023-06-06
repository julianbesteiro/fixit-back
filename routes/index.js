const express = require("express");
const router = express.Router();
const users = require("./users");
const offices = require("./offices");
const cases = require("./cases");

router.use("/users", users);
router.use("/offices", offices);
router.use("/cases", cases);

module.exports = router;
