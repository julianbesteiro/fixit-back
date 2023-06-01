const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);

module.exports = router;
