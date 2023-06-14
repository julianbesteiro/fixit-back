const express = require("express");
const router = express.Router();
const { imagesController } = require("../controllers");

router.post("/urlImage", imagesController.updateUrlImage);

module.exports = router;
