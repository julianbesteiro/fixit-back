const express = require("express");
const router = express.Router();
const { casesController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/newCase", casesController.createCase);
router.get("/allDevices", casesController.allDevices);

//admin
router.get("/", validateAdmin, casesController.getAll);
router.get("/user/:id", validateAdmin, casesController.userCases);
router.get("/owner/:id", validateAdmin, casesController.ownerCases);
router.get("/filter", validateAdmin, casesController.filterCases);
router.put("/update/:id", validateAdmin, casesController.updateCase);

//user

router.get("/filterGlober/:id", casesController.filterCasesGlober);

module.exports = router;
