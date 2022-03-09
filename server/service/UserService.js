const repository = require("../repository/UserRepository");

exports.save = function (user) {
    return repository.save(user);
}

exports.update = function (user) {
    return repository.update(user);
}

exports.removeById = function (id) {
    return repository.destroyById(id);
}

exports.findById = function (id) {
    return repository.findByPk(id);
}

exports.findAll = function () {
    return repository.findAll();
}

exports.findByUserName = function (username) {
    return repository.findByUserName(username);
}
