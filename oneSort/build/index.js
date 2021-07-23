"use strict";
/*
  We're learning about how to configure the TS compiler to
  place compiled JS code into the build folder. This will separate
  our TS and JS code so that we can keep things clean.

  Command run:
  tsc --init

  Then we changed the root dir and outDir properties
  in the tsconfig.json generated

  We can run:
  tsc -w

  to constantly watch for changes in our index.ts file
  and automatically compile to JS on save.

  BUT we still want to automate the process of running the newly
  compiled code in the build folder.. for that we need some npm packages

  nodemon and concurrently

  nodemon is used to run the code and display in the console
  while concurrently compiles and runs nodemon in parallel.

*/
var Sorter = /** @class */ (function () {
    // bad solution
    // if we try to sort for a number or a string, we could use
    // the pipe operator to say collection is either an array of
    // numbers or a string..
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        // We're just using bubble sort, nothing fancy
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // bad solution for sorting multiple types
                // if collection is an array of numbers - use this:
                // using a "type guard"
                // we use type guards when we want TS to restore the functionality
                // of a type when the type could be ambiguous (currently number[] | string)
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
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
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
