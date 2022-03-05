const User = require("../../database/model/user");

exports.save = function(user) {
    user = User.build(user)
    return user.save();
}

exports.findByUserName = function(username) {
    return User.findOne({ where: { username: username } });
}