// this is the interface solution to the reuseable code problem
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

// we're defining a tuple so that we can describe what
// exactly each row will look like
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  // In addition to what read does, load parses for our matchData
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // this is a type assertion
        row[6],
      ];
    });
  }
}
