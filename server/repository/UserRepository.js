const User = require("../../database/model/User");
const bcrypt = require("bcrypt");

exports.save = function(user) {
    return User.create(user);
}

exports.update = function(user) {
    return User.update(user, {
        where: {
            id: user.id
        }
    });
}

exports.destroyById = function(id) {
    return User.destroy({
        where: {
            id: id
        }
    });
}

exports.findByPk = function (id) {
    return User.findByPk(id);
}

exports.findAll = function() {
    return User.findAll();
}

exports.findByUserName = function(username) {
    return User.findOne({ where: { username: username } });
}