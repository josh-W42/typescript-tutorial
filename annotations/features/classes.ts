/*
  A small review of classes in TS

  Note that without placing modifiers on
  functions and properties, by default they
  are gong to be public

  Normally we have:
  Public: property and function can be use anywhere
  Private: only the current class
  Protected: current class and children
*/

class Vehicle {
  // color: string = "red"; // one way to specify a property
  // constructor(color: string | null) {
  //   this.color = color;
  // }
  // color: string; // another way

  // constructor(color: string) {
  //   this.color = color;
  // }

  // one last way
  constructor(public color: string) {}

  private drive(): void {
    console.log("Movin'");
  }
  protected honk(): void {
    console.log("beep beep");
  }
}

const vehicle = new Vehicle("red");
vehicle.drive(); // can't use
vehicle.honk(); // also can't use

// basic inheritance

class Car extends Vehicle {
  // note that we shouldn't re-specify the color modifier, it was
  // already specified as public
  constructor(public wheels: number, color: string) {
    super(color);
  }

  example(): void {
    this.honk(); // can use here
    this.drive(); // still can't use
  }
}

const newCar = new Car(4, "red");
newCar.drive(); // nope
newCar.honk(); // nope

/*
  While this was just an overview of the capabilities of classes
  what will be really useful is how we pair interfaces with classes
  to get very strong code reuse strategies.
*/
