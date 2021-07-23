import { MatchData } from "./MatchData";

/*
  The goal of this file is create a general way
  of analyzing the data we receive and where it gets
  outputted to.
*/

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
