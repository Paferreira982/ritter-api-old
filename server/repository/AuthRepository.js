const User = require("../../database/model/User");
const { Op } = require("sequelize");
const { compare } = require("../security/Security")

exports.login = async function(username, password) {
    const user = await User.findOne({ where: { username: username }});
    return (user && compare(password, user.password)) ? user : null;
}