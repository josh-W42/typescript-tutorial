"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeFunctions = void 0;
var login = function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
};
exports.routeFunctions = {
    login: login,
};