const express = require("express");
const router = express.Router();
const { casesController } = require("../controllers");

router.post("/newCase", casesController.createCase);
router.get("/allDevices", casesController.allDevices);

module.exports = router;
