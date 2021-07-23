/*
  if you need to remember to use parcel
  just type parcel index.html at the maps directory
  parcel just allows you to run TS in the browser.
  had to install parcel globally with npm
*/

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

// google.map;
// the google global variable is not working probably
// ~so sorry~

// const map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// });

/*
  We're going to create a custom map class to encapsulate the google maps
  object so that we can keep it safe and so that in the future..
  there won't be many issues.
*/

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
