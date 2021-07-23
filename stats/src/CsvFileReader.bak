import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// we generalized the file reader functionality to
// a class that reads and parses a csv file, making this
// code more reuseable

// we're defining a tuple so that we can describe what
// exactly each row will look like
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): MatchData => {
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
