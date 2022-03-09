const repository = require("../repository/AuthRepository");

exports.login = async function (username, password) {
    return await repository.login(username, password);
}
