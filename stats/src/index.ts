// had to install @types/node for standard lib types
// ANYTIME YOU ARE USING NODE STANDARD LIBRARY STUFF IN TS
// REMEMBER TO DOWNLOAD @types/node OR YOU WILL GET AN ERROR
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

/*
  This project is large and can be confusing to look through but
  what we're trying to accomplish here is 2 different paths to make
  this code reuseable,

  We tried an inheritance pathway that follows a 'is a' pattern
  between classes

  Then we tried a composition pathway that follows a 'has a' pattern
  between classes

  The point that we attempted to make was that sometimes composition can
  give rise to more reusable code
*/

// for the interface path

// create an object that satisfies the 'dataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// create an instance of MatchReader and pass in something satisfying
// the 'data reader' interface'
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches[0]);

// improvement 1: no "magic variables"
// const homeWin = "H";
// const awayWin = "A";
// const draw = "D"; // bc this isn't used this might get deleted

// option 1: use an object?
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };

// option 2: use an enum - enumeration - Better
// imported from file

// why are enums better than objects?
// in this case enum is better because it's sole purpose
// is to communicate that this is just a way of representing data.
// ALSO, in this case the enum values are known before analysis
// if this information was unknown we should not use an enum

// find the number of times manchester united won
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[2] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won: ${manUnitedWins} games`);
