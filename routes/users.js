const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);
router.get("/profileData/:id", usersController.profileData);
router.get("/casesHistory/:id", usersController.casesHistory);
router.put("/update/:id", usersController.updateUser);
router.get("/lastCase/:id", usersController.lastCase);
router.get("/secret", usersController.secret);
router.get("/search", validateAdmin, usersController.searchUsers);

module.exports = router;
