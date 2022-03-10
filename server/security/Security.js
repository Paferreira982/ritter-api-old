const { JWT_SECRET, JWT_EXPIRE } = require("../infra/ConfigEnviroment");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.hash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

exports.compare = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

exports.generateToken = function (id) {
    return jwt.sign({userId: id}, JWT_SECRET, {expiresIn: JWT_EXPIRE});
}