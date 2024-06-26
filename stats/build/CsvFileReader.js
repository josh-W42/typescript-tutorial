"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// we generalized the file reader functionality to
// a class that reads and parses a csv file, making this
// code more reuseable
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    // read parses the data
    // split by \n
    // then by comma
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
