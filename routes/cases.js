const express = require("express");
const router = express.Router();
const { casesController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/newCase", casesController.createCase);

//admin
router.get("/", validateAdmin, casesController.getAll);

router.get("/filter", validateAdmin, casesController.filterCases);

module.exports = router;
