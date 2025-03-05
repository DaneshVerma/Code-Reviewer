const express = require("express");
const router = express.Router();
const aiController  = require("../controllers/ai.controller")

router.get("/get-response", aiController.getresponse);

module.exports = router;
