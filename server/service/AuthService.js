const repository = require("../repository/AuthRepository");
const {JWT_SECRET, JWT_EXPIRE} = require("../infra/ConfigEnviroment");
const jwt = require("jsonwebtoken");

exports.login = async function (username, password) {
    const user  = await repository.login(username, password);
    let response = {};
    response.body = {};

    if (user) {
        response.body.token = jwt.sign({userId: user.id}, JWT_SECRET, {expiresIn: JWT_EXPIRE});
        response.body.message = "Login realizado com sucesso.";
        response.status = 200;
    } else {
        response.body.message = "Usuário ou senha incorretos.";
        response.status = 401;
    }
    return response;
}
