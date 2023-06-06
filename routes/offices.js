const express = require("express");
const router = express.Router();
const { officesController } = require("../controllers");

router.post("/create", officesController.createOffice);
router.get("/all", officesController.viewAllOffices);
router.delete("/delete/:idOffice", officesController.deleteOffice);
router.put("/edit/:idOffice", officesController.editOffice);

module.exports = router;
