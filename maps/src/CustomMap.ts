import { User } from "./User";
import { Company } from "./Company";

// exporting interface to help with error catching
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // private googleMap: google.maps.Map; // what we need
  private googleMap: string;

  constructor(divId: string) {
    this.googleMap = "fake map";
    // bellow is what we actually need
    // this.googleMap = new google.maps.Map(document.getElementById(divId), {
    //   zoom: 1,
    //   center: {
    //     lat: 0,
    //     lng: 0,
    //   },
    // });
  }

  // an example of not DRY code

  // addUserMarker(user: User): void {
  // new this.googleMap.maps.Marker({
  //   map: this.googleMap,
  //   position: {
  //     lat: user.location.lat,
  //     lng: user.location.lng,
  //   },
  // });
  // }

  // addCompanyMarker(company: Company): void {
  // new this.googleMap.maps.Marker({
  //   map: this.googleMap,
  //   position: {
  //     lat: company.location.lat,
  //     lng: company.location.lng,
  //   },
  // });
  // }

  // A better solution than above
  // addMarker(mappable: User | Company): void {
  // new this.googleMap.maps.Marker({
  //   map: this.googleMap,
  //   position: {
  //     lat: mappable.location.lat,
  //     lng: mappable.location.lng,
  //   },
  // });
  // }

  /*
    This could be even better though...
     bc what if we need to add markers for
     other models? Like Hospitals or Stores?
     it would be not be scalable to just limit this to
     users and companies

     The solution?

     Interfaces could help here!
  */

  // This is an example of a design principle called
  // "program to an interface instead of an implementation"
  // This is better because it's scalable, this function
  // doesn't need to understand the implementation of user or
  // company, all it cares about is whether the argument satisfies
  // the mappable interface.
  addMarker(mappable: Mappable): void {
    // const marker = new this.googleMap.maps.Marker({
    //   map: this.googleMap,
    //   position: {
    //     lat: mappable.location.lat,
    //     lng: mappable.location.lng,
    //   },
    // });
    // marker.addListener("click", () => {
    //   const infoWindow = new google.maps.InfoWindow({
    //     content: mappable.markerContent(),
    //   });
    //   infoWindow.open(this.googleMap, marker);
    // });
  }
}
