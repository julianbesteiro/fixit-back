const express = require("express");
const router = express.Router();

const { mapsController } = require("../controllers");

router.get("/places/findNearbyOffice", mapsController.findNearbyOffice);
router.get("/places/autocomplete", mapsController.autocompleteController);

module.exports = router;
