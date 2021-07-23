import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

// This is the inheritance solution to the reuseable code problem

// we're defining a tuple so that we can describe what
// exactly each row will look like
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // this is a type assertion
      row[6],
    ];
  }
}
