// had to install @types/node for standard lib types
// ANYTIME YOU ARE USING NODE STANDARD LIBRARY STUFF IN TS
// REMEMBER TO DOWNLOAD @types/node OR YOU WILL GET AN ERROR
import fs from "fs";

/*
  This is the start of the 'bad code'
  or just not reusable code approach to
  this analysis.
*/

// we have to parse this
// split by \n
// then by comma
const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

console.log(matches);

// improvement 1: no "magic variables"
const homeWin = "H";
const awayWin = "A";

// find the number of times manchester united won
let manUnitedWins = 0;

for (let match of matches) {
  if (match[2] === "Man United" && match[5] === homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won: ${manUnitedWins} games`);
