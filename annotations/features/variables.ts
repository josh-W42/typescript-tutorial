/*
  Note about type annotations
  you don't actually need to write 
  all of them!

  TS can use type inference to guess what the type is.
  
  So When to use annotations vs inference?

  Use type annotations when:
    We declare a variable on one line then initialize it later.
    When we want a variable to have a type that can't be inferred.
    When a function returns the 'any' type and we need to clarify the value;

  Use Inference:
    Always!

*/

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object types
let date: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];

// classes

class Car {}

let car: Car = new Car();

// object literal

/*
  This is how you would correctly use type
  annotations for an object literal..
  note that it might be better to use an interface
  for this instead of using a verbose variable
  declaration.
*/
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations examples
// 1) Function that returns 'any'
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); // returns a value of 'any' type
// console.log(coordinates);
/*
  The issue here is that JSON.parse can return many different types
  So the TS compiler just uses 'any'

  What's the solution?

  Specify what types you expect to get from the json.
  BUT, what happens when we're using an API?
  Do we create entire interfaces for the data we get back
  from the backend? We are unsure at this time.
*/

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and then initialize it
// later

let words = ['red', 'green', 'blue'];
// let foundWord; // here it is just any
let foundWord: boolean; // here TS knows what foundWord should be later

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we have a variable whose type cannot be inferred correctly
let numbers2 = [-10, -1, 12]; // or any array of numbers really...
// let numberAboveZero; // where this should be a number above zero or false
// usually this is bad conventionally but when you have to deal with this
// situation, we can do the following:
let numberAboveZero: boolean | number = false;

// this means that the type could be boolean or a number

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    numberAboveZero = numbers2[i];
  }
}

// function annotations
// this is a cleaner way of writing function annotations
// than the example we used before
const add = (a: number, b: number): number => {
  return a + b;
};

/*
  When writing out functions, always annotate types for
  parameters, do not use inference for these.
  
  Also, while inference can work for the output.. Do Not Use It!
  instead also annotate the output. So that typescript knows we
  intend on returning something from the function or not.
*/

// anonymous functions
// the function definitions should be similar
function divide(a: number, b: number): number {
  return a / b;
}
const multiply = function (a: number, b: number): number {
  return a * b;
};

// functions that don't return anything
const logger = (message: string): void => {
  console.log(message);
};

// This is a special case in which the function never returns anything
// the program is exited before the function is complete.
const throwError = (message: string): never => {
  throw new Error(message);
};

// however in a similar case, we should still specify the output
const throwNewError = (message: string): string => {
  if (!message) {
    throw new Error('Not found');
  }

  return message;
};

// destructuring
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// in ES2015 syntax with destructuring
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
