const repository = require("../repository/AuthRepository");
const security = require("../security/Security");

exports.login = async function (username, password) {
    if (username === undefined || password === undefined) return getErrorResponse(400);

    const user  = await repository.login(username, password);
    if (!user) return getErrorResponse(401);
    
    return getResponse(200, {token: security.generateToken(user.id)}, "auth");
}

function getResponse(status, obj, key) {
    let response = generateBaseResponse(status);
    
    switch (status) {
        case 200:
            response.body[key || "key"] = obj;
            response.body.message = "Ok.";
            break;
        default:
            response.body.message = "Unknown status code.";
    }

    return response;
}

function getErrorResponse(status, message) {
    let response = generateBaseResponse(status);
    
    switch (status) {
        case 200:
            response.body[obj.key || "key"] = obj.body;
            response.body.message = message || "Ok.";
            break;
        case 400:
            response.body.message = message || "Bad request.";
            break;
        case 401:
            response.body.message = message || "Unauthorized.";
            break;
        case 500:
            response.body.message = message || "Internal server error.";
            break;
        default:
            response.body.message = message || "Unknown error.";
    }

    return response;
}

function generateBaseResponse(status) {
    let response = {}; 
    response.body = {};
    response.status = status;
    return response;
}