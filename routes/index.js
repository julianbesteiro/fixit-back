const express = require("express");
const router = express.Router();
const users = require("./users");
const cases = require("./cases");

router.use("/users", users);
router.use("/cases", cases);
module.exports = router;
