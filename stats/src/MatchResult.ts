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

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
