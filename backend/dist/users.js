"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.match = function (user) {
        return user !== undefined &&
            user.email === this.email &&
            user.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "flavio@gmail.com": new User("flavio@gmail.com", "flavio", "flavio123"),
    "luciana@gmail.com": new User("luciana@gmail.com", "luciana", "luciana123"),
    "gabriel@gmail.com": new User("gabriel@gmail.com", "gabriel", "gabriel123"),
    "anna@gmail.com": new User("anna@gmail.com", "anna", "anna123")
};
