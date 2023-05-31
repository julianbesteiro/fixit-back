const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("llegamos a users");
});

module.exports = router;
