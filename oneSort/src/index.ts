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

class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    // We're just using bubble sort, nothing fancy
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
