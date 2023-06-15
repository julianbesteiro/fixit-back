const express = require("express");
const router = express.Router();
const { imagesController } = require("../controllers");

router.post("/urlImage", imagesController.imageUpdate);

module.exports = router;
