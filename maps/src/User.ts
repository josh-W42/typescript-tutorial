import faker from "faker";
import { Mappable } from "./CustomMap";
/*
  This app will get a random name, longitude and latitude then
  show a position of the user and the location of the coordinates

  one thing to note is that when we use js libraries in ts
  files we may have to get something called a types definition for
  that library.

  For faker, we needed to install @types/faker, it was generated from the 
  dynamic types lib

  Some popular libraries may come with this dependency installed others
  may not, so keep an eye open


  ALSO it is a convention in TS to not use default exports!
  This is contrary to what we've seen in react.js so it's worth
  noting. It's fine to use them of course but we try not to.
*/

// by using the implements clause is so that TS can point us
// to route cause of an issue with objects
// not necessary but you can use it!
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // generates a random first name
    this.name = faker.name.firstName();
    // generates a random location
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
