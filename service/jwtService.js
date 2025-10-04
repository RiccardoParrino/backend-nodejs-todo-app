const jwt = require('jsonwebtoken');

exports.createJwt = async (email) => {
    const token = jwt.sign(
        { userId: email }, 
        process.env.JWT_SECRET_KEY, 
        { expiresIn: "2h" }
    );
    return token;
}

exports.verifyJwt = (token) => {
    jwt.verify( token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log("Error occurred in JWT");
            return false;
        } else {
            console.log("JWT is valid");
            console.log(decoded.userId);
            return true;
        }
    });
}