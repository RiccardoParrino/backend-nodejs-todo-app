const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.createJwt = (email) => {
    const token = jwt.sign(
        { userId: email }, 
        process.env.JWT_SECRET_KEY, 
        { expiresIn: "2h" }
    );
    return token;
}

exports.verifyJwt = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify( token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log("Error occurred in JWT");
            res.sendStatus(401);
        } else {
            console.log("JWT is valid");
            console.log(decoded.userId);
            next();
        }
    });
}

exports.extractEmailFromJwt = async (req) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    let userId;

    jwt.verify( token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log("Error occurred in JWT");
        } else {
            console.log("JWT is valid");
            console.log(decoded.userId);
            userId = decoded.userId;
        }
    });

    return userId;
}