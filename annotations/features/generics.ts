class ArrayOfNumbers {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// class ArrayOfStrings .. etc

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// TS can use inference on generics
const arr = new ArrayOfAnything(["a", "b", "c"]);

// example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// TS can still infer what we're trying to do
// without generics but in order to maintain that
// level of information for the TS compiler and for
// other engineers.
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(["a", "b", "b"]);

// another example

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    // without generic constraints, this generates an error
    // since there is no guarantee that this function's types
    // have a method called print
    arr[i].print();
  }
}

// so now
printHouseOrCars([2, 3]); // doesn't work
printHouseOrCars([new Car(), new House()]); // does work
