class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

// target would be prototype of Boat
// key is the property/method/accessor on the object that
// the decorator is assigned to.
// The third hidden parameter is the property descriptor
function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  console.log(target);
  console.log(key);
  console.log(desc);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
