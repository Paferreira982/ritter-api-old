const data = require("../repository/UserRepository");

exports.save = function (user) {
    return data.save(user);
}

exports.update = function (user) {
    return data.update(user);
}

exports.removeById = function (id) {
    return data.destroyById(id);
}

exports.findById = function (id) {
    return data.findByPk(id);
}

exports.findAll = function () {
    return data.findAll();
}

exports.findByUserName = function (username) {
    return data.findByUserName(username);
}