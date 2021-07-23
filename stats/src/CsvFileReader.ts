import fs from "fs";

// we generalized the file reader functionality to
// a class that reads and parses a csv file, making this
// code more reuseable

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  // read parses the data
  // split by \n
  // then by comma
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
