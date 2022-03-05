const data = require("../data/roleData");

exports.findAll = function() {
    return data.findAll();
}

exports.save = function(role) {
    return data.save(role);
}

exports.findByName = function(name) {
    return data.findByName(name);
}