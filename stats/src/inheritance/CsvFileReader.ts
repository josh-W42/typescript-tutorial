import fs from "fs";
import { MatchResult } from "./MatchResult";

// we generalized the file reader functionality to
// a class that reads and parses a csv file, making this
// code more reuseable

/*
   We're getting ready to use something call "generics"

  - They are like function arguments but they are used for types
      in a class/function definition

  - We can define a type of a property/parameter/return value
      at a future point (like abstract classes let us)
  
  - Used heavily when writing reusable code.

  example:
  class HoldAnything<Type> {
    data: Type;
  }

  const holdNumber = new HoldAnything<number>();
  holdNumber.data = 123;
  (holdNumber<number> and holdNumber.data is of type number)

  similarly
  const holdString = new HoldAnything<string>();
  (holdString<string> and holdString.data is of type string)

*/

// csvFileReader is now a generic abstract class
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
