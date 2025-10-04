const authenticationService = require("../service/authenticationService");
const jwtUtilities = require('../middleware/jwtUtilities');

exports.createUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
    res.send(await authenticationService.createUser(email, password, name, surname));
}

exports.loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const logged = await authenticationService.loginUser(email, password);
    if (logged) {
        const token = jwtUtilities.createJwt(email);
        const response = {
            'token': token,
            'authorized': true
        }
        res.send(response);
    } else {
        res.sendStatus(401);
    }
}