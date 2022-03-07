const Role = require("../../database/model/Role");

exports.findAll = function() {
    return Role.findAll();
}

exports.save = function(role) {
    role = Role.build(role)
    return role.save();
}

exports.findByName = function(name) {
    return Role.findOne({ where: { name: name } });
}