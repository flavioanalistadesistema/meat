"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.match = function (another) {
        return another.email !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "flavio@gmail.com": new User('flavio@gmail.com', 'flavio', '123456'),
    "luciana@gmail.com": new User('luciana@gmail.com', 'luciana', '123456')
};
