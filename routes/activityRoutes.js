const express = require("express");

const activityController = require("../controller/activityController");

const router = express.Router();

router.post("/createActivity", activityController.createActivity);
router.post("/updateActivity", activityController.updateActivity);
router.get("/deleteActivity", activityController.deleteActivity);

router.get("/removeAll", activityController.removeAll);
router.get("/findAll", activityController.findAll);

module.exports = router;