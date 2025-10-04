const express = require("express");

const jwtController = require("../controller/jwtController");
const router = express.Router();

router.get("/create", jwtController.createJwt);

module.exports = router;