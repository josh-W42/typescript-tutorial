/*
OK so

as you recall from the lessons on variables.. 
This is how you would write out a function that
accepts a "vehicle" object..

it's very verbose and it could become very unreadable
if we had more object properties

*/

interface Vehicle {
  name: string;
  year: number;
  // broken: boolean; Also note that if a property is not in Vehicle
  // there is no error, for oldCivic
  // we can also use complex types as well
  lastUsed: Date;
  // or a function, we need vehicles to have a summary
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  lastUsed: new Date(),
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// Note that the below function now doesn't really have any thing to do
// with cars, so we refactored it
// const printVehicle = (vehicle: Vehicle): void => {
//   vehicle.summary();
// };

const printSummary = (item: Reportable): void => {
  item.summary();
};

printSummary(oldCivic);

// This is better because now we can do something like this:
const drink1 = {
  color: "brown",
  sugar: 20,
  carbonation: true,
  summary(): string {
    return `Sugar content: ${this.sugar}`;
  },
};

// now we can use printSummary on the drink

printSummary(drink1);

/*
  The general strategy for reusable code in TS is to:

    1) create functions that accept arguments that
        are typed with interfaces

    2) Objects/classes can decide to 'implement' a
        given interface to work with a function.
*/
