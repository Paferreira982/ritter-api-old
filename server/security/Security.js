const bcrypt = require("bcrypt");

exports.hash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

exports.compare = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}