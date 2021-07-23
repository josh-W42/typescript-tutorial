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
/*
   We're getting ready to use something call "generics"

  - They are like function arguments but they are used for types
      in a class/function definition

  - We can define a type of a property/parameter/return value
      at a future point (like abstract classes let us)
  
  - Used heavily when writing reusable code.

  example:
  class HoldAnything<Type> {
    data: Type;
  }

  const holdNumber = new HoldAnything<number>();
  holdNumber.data = 123;
  (holdNumber<number> and holdNumber.data is of type number)

  similarly
  const holdString = new HoldAnything<string>();
  (holdString<string> and holdString.data is of type string)

*/
// csvFileReader is now a generic abstract class
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
