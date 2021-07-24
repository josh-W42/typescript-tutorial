"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var controllers_1 = require("../controllers");
var RequireAuth_1 = require("../middleware/RequireAuth");
var router = express_1.Router();
exports.router = router;
router.get("/login", controllers_1.controllers.auth.showLogin);
router.get("/logout", RequireAuth_1.requireAuth, controllers_1.controllers.auth.logout);
router.post("/login", controllers_1.controllers.auth.login);