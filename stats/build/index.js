"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// had to install @types/node for standard lib types
// ANYTIME YOU ARE USING NODE STANDARD LIBRARY STUFF IN TS
// REMEMBER TO DOWNLOAD @types/node OR YOU WILL GET AN ERROR
var fs_1 = __importDefault(require("fs"));
/*
  This is the start of the 'bad code'
  or just not reusable code approach to
  this analysis.
*/
// we have to parse this
// split by \n
// then by comma
var matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map(function (row) { return row.split(","); });
console.log(matches);
// improvement 1: no "magic variables"
var homeWin = "H";
var awayWin = "A";
// find the number of times manchester united won
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[2] === "Man United" && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won: " + manUnitedWins + " games");
