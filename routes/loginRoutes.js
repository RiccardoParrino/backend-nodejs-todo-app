const express = require("express");
const loginController = require("../controller/loginController");
const router = express.Router();

router.post("/createUser", loginController.createUser);
router.post("/loginUser", loginController.loginUser);

module.exports = router;