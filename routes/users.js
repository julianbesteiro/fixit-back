const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.get("/logout", usersController.logout);
router.get("/profileData/:id", usersController.profileData);
router.put("/update/:id", usersController.updateUser);
router.get("/lastCase/:id", usersController.lastCase);
router.post("/secret", usersController.secret);
router.get("/search", validateAdmin, usersController.searchUsers);
router.get("/getUsers", validateAdmin, usersController.getUsers);

module.exports = router;
