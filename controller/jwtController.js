const jwtService = require("../service/jwtService")

exports.createJwt = async (req, res, next) => {
    res.send(await jwtService.createJwt(req.query.email));
}