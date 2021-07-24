"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
/*
  Ok so we're trying to use express normally
  and just using type annotations with TS syntax

  but there are some major issues involving integrating
  middleware and the types file makes great assumptions.
  
  Also inputs to the server are not guaranteed to exist
  or be of the correct type...

  This might not be the best way to implement this..
*/
var app = express_1.default();
var PORT = process.env.PORT || 5000;
app.use(express_1.default.urlencoded({ extended: false })); // if you parse images
app.use(express_1.default.json()); // body parser for json
// regular handler
app.get("/", function (req, res) {
    res.send("<h1>You made it</h1>");
});
// let each router set it's own routes
app.use("/api/v1/auth", routes_1.routers.auth);
app.listen(PORT, function () {
    console.log("Jammin' on Port: ", PORT);
});
