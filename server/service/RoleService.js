const repository = require("../repository/RoleRepository");

exports.findAll = function() {
    return repository.findAll();
}

exports.save = function(role) {
    return repository.save(role);
}

exports.findByName = function(name) {
    return repository.findByName(name);
}
