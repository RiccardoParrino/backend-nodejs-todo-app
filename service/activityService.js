const activityRepository = require('../repository/activityRepository')

exports.createActivity = (author, name, date, description, city) => {
    return activityRepository.createActivity(author, name, date, description, city);
}

exports.findAll = (author) => {
    return activityRepository.findAll(author);
}

exports.updateActivity = (name, newName, newDate, newDescription, newCity) => {
    return activityRepository.updateActivity(name, newName, newDate, newDescription, newCity);
}

exports.deleteActivity = (name) => {
    return activityRepository.deleteActivity(name);
}

exports.removeAll = () => {
    return activityRepository.removeAll();
}