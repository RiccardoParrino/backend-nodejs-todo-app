const authenticationService = require("../service/authenticationService");

exports.deleteUser = async (req, res, next) => {
    const email = req.body.email;
    res.send(await authenticationService.deleteUser(email));
}

exports.listAllUsers = async (req, res, next) => {
    res.send(await authenticationService.listAllUsers());
}