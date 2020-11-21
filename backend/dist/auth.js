"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var api_config_1 = require("./api-config");
var jwt = require("jsonwebtoken");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, api_config_1.authenticationPassword.secret);
        return resp.json({ name: dbUser.name, email: dbUser.email, acessToken: token });
    }
    else {
        return resp.status(403).json("Dados invalido");
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.match(user);
}
