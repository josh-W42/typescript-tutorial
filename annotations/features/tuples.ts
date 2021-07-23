const drink = {
  color: "brown",
  carbonated: true,
  sugar: 30,
};

// Above is the idea of a tuple, an array-like object
// that follows this pattern
// const pepsi: [string, boolean, number] = ["brown", true, 20];

// Bellow is a better way to write tuples
type Drink = [string, boolean, number];
const pepsi: Drink = ["red", false, 20];

// define a type with an order, then refer to the type later

/*
  So while TS has the capabilities to create tuples, they may
  not be as useful in practice. The reason being is because 
  we lose the meaning being the types in tuples if we freshly
  look at code.
*/
