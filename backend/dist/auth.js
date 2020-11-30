"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var Jwt = require("jsonwebtoken");
var api_config_1 = require("./api.config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = Jwt.sign({ sub: dbUser.email, ass: 'meat-api' }, api_config_1.apiConfig.secret);
        resp.status(200).json({ mensage: "Bem vindo Sr. " + dbUser.name, accessToken: token });
    }
    else {
        resp.status(403).json({ mensage: "Dados inválidos" });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.match(user);
}
