import { NumbersCollection } from "./NumbersCollection";

/*
  Interfaces vs abstract classes:

  while interfaces and abstract classes solve similar
  problems, interfaces loosely couple classes together
  while abstract classes strongly couple classes together.

  Whether or not you need that coupling depends on whether
  you use interfaces vs abstract classes.
*/

// we use an interface to define and
// enforce what objects this sorter can sort
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// we're going to create an abstract class for sorter

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    // We're just using bubble sort, nothing fancy
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

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
