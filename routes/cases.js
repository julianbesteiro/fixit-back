const express = require("express");
const router = express.Router();
const { casesController } = require("../controllers");

router.post("/newCase", casesController.createCase);

module.exports = router;
