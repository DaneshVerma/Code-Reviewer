const express = require("express");
const router = express.Router();

router.get("/connect", (req, res) => {
  res.send("ready").status(200);
});

module.exports = router;
