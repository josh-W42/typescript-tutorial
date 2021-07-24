"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeFunctions = void 0;
var showLogin = function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
};
var login = function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    // we needed a type guard and an interface to fix the type of Request, originally it was any
    if (email && password && email === "cool@cool.com" && password === "pass") {
    }
    else {
        res.json({
            message: "Invalid Email and Password",
        });
    }
};
var logout = function (req, res) {
    req.session = undefined;
    res.redirect("/");
};
exports.routeFunctions = {
    showLogin: showLogin,
    login: login,
    logout: logout,
};
