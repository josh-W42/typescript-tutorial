"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// we're going to create an abstract class for sorter
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        // We're just using bubble sort, nothing fancy
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
/*
  Old Bad Solution

  class Sorter {
    // bad solution
    // if we try to sort for a number or a string, we could use
    // the pipe operator to say collection is either an array of
    // numbers or a string..
    constructor(public collection: number[] | string) {}

    sort(): void {
      // We're just using bubble sort, nothing fancy
      const { length } = this.collection;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          // bad solution for sorting multiple types

          // if collection is an array of numbers - use this:
          // using a "type guard"
          // we use type guards when we want TS to restore the functionality
          // of a type when the type could be ambiguous (currently number[] | string)
          if (this.collection instanceof Array) {
            if (this.collection[j] > this.collection[j + 1]) {
              const leftHand = this.collection[j];
              this.collection[j] = this.collection[j + 1];
              this.collection[j + 1] = leftHand;
            }
          }

          // if collection is a string - use this:
          if (this.collection instanceof String) {
            // logic for swapping characters
          }

          // if collection is a.... etc
        }
      }
    }
  }
*/
