const authenticationRepository = require("../repository/authenticationRepository");

exports.createUser = (email, password, name, surname) => {
    return authenticationRepository.createUser(email, password, name, surname);
}

exports.deleteUser = (email) => {
    return authenticationRepository.deleteUser(email);
}

exports.loginUser = async (email, password) => {
    return authenticationRepository.loginUser(email, password);
}

exports.listAllUsers = () => {
    return authenticationRepository.listAllUsers();
}