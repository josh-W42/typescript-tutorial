/*
  This is a section on type annotations for objects

  Bellow are some examples. As you can see, these could
  get messy later on in larger programs.
*/

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES2015 syntax with type annotations
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
