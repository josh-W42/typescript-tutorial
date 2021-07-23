import faker from "faker";

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

export class User {
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
}
