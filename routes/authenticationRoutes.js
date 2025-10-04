const express = require("express");
const authenticationController = require("../controller/authenticationController");
const router = express.Router();

router.post("/deleteUser", authenticationController.deleteUser);
router.get("/listAllUsers", authenticationController.listAllUsers);

module.exports = router;