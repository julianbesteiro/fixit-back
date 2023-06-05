const express = require("express");
const validateUser = require("../middlewares/auth");
const router = express.Router();
const { usersController } = require("../controllers");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);

router.get("/secret", usersController.secret);

module.exports = router;
