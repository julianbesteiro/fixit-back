const express = require("express");
const router = express.Router();
const users = require("./users");
const offices = require("./offices");

router.use("/users", users);
router.use("/offices", offices);

module.exports = router;
