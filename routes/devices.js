const express = require("express");
const router = express.Router();
const { devicesController } = require("../controllers");
const { validateAdmin } = require("../middlewares/auth");

router.post("/create", validateAdmin, devicesController.createDevice);
router.get("/all", devicesController.viewAllDevices);
router.delete(
  "/delete/:idDevice",
  validateAdmin,
  devicesController.deleteDevice
);
router.put("/edit/:idDevice", validateAdmin, devicesController.editDevice);

module.exports = router;
