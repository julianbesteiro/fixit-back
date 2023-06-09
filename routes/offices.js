const express = require("express");
const router = express.Router();
const { officesController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/create", validateAdmin, officesController.createOffice);
router.get("/all", officesController.viewAllOffices);
router.delete(
  "/delete/:idOffice",
  validateAdmin,
  officesController.deleteOffice
);
router.put("/edit/:idOffice", validateAdmin, officesController.editOffice);

module.exports = router;
