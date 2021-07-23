// had to install @types/node for standard lib types
// ANYTIME YOU ARE USING NODE STANDARD LIBRARY STUFF IN TS
// REMEMBER TO DOWNLOAD @types/node OR YOU WILL GET AN ERROR
import { CsvFileReader } from "./CsvFileReader";

/*
  This is the start of the 'bad code'
  or just not reusable code approach to
  this analysis.
*/

// we have to parse this
// split by \n
// then by comma
const reader = new CsvFileReader("football.csv");
reader.read();

console.log(reader.data);

// improvement 1: no "magic variables"
const homeWin = "H";
const awayWin = "A";
const draw = "D"; // bc this isn't used this might get deleted

// option 1: use an object?
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };

// option 2: use an enum - enumeration - Better
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

// why are enums better than objects?
// in this case enum is better because it's sole purpose
// is to communicate that this is just a way of representing data.
// ALSO, in this case the enum values are known before analysis
// if this information was unknown we should not use an enum

// find the number of times manchester united won
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[2] === "Man United" && match[5] === homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won: ${manUnitedWins} games`);
