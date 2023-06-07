const express = require("express");
const router = express.Router();
const { casesController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/newCase", casesController.createCase);
router.get("/allDevices", casesController.allDevices);

//admin
router.get("/", validateAdmin, casesController.getAll);

router.get("/filter", validateAdmin, casesController.filterCases);

//user

router.get("/filterGlober", casesController.filterCasesGlober);

module.exports = router;
