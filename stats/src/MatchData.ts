import { MatchResult } from "./MatchResult";

// we're defining a tuple so that we can describe what
// exactly each row will look like
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
