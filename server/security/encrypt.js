const bcrypt = require("bcrypt");

exports.encryptPassword = function(password) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt)
}