"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
// an express way to deal with checking if a user is signed in
// - as if a user is hitting a protected route
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("Not permitted");
}
exports.requireAuth = requireAuth;
