const carMakers = ["ford", "toyota", "chevy"];
// any time if you declare and initialize an array and
// the type is inferable then you don't have to annotate the types

const dates: Date[] = [];

/*
  So why focus on arrays?

  Well if we specify the types present in the array then TS
  has some knowledge of what comes out of the array and can
  assist while we're developing.
*/

const car = carMakers[0];
car.slice(0, 1); // autocorrect can help
carMakers.pop().toLocaleLowerCase();

carMakers.push(100); // we get an error here

// it can also help when dealing with map, forEach,
// reduce and filter functions.

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Lastly, we have access to flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2010-10-02");
importantDates.push(new Date());
importantDates.push(2);
