const data = require("../data/userData");

exports.save = function(user) {
    return data.save(user);
}

exports.findByUserName = function(username) {
    return data.findByUserName(username);
}