const activityService = require('../service/activityService');
const jwtUtilities = require('../middleware/jwtUtilities');

exports.createActivity = async (req, res, next) => {
    const authorEmail = await jwtUtilities.extractEmailFromJwt(req);
    res.send(await activityService.createActivity(
        authorEmail,
        req.body.name,
        req.body.date,
        req.body.description,
        req.body.city
    ));
}

exports.findAll = async (req, res, next) => {
    const authorEmail = await jwtUtilities.extractEmailFromJwt(req);
    res.send(await activityService.findAll(authorEmail));
}

exports.updateActivity = async (req, res, next) => {
    const name = req.body.name;
    const newName = req.body.newName;
    const newDate = req.body.newDate;
    const newDescription = req.body.newDescription;
    const newCity = req.body.newCity;
    res.send(await activityService.updateActivity(name, newName, newDate, newDescription, newCity));
}

exports.deleteActivity = async (req, res, next) => {
    const name = req.query.name;
    res.send(await activityService.deleteActivity(name));
}

exports.removeAll = async (req, res, next) => {
    await activityService.removeAll();
    res.send("DONE");
}