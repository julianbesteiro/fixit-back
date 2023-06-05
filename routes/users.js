const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);
router.get("/profileData/:id", usersController.profileData);
router.get("/casesHistory/:id", usersController.casesHistory);
router.put("/update/:id", usersController.updateUser);
router.get("/lastCase/:id", usersController.lastCase);
router.get("/caseFilterByStatus/:id", usersController.caseFilterByStatus);
router.get("/secret", usersController.secret);

module.exports = router;
