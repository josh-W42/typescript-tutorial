// had to install @types/node for standard lib types
// ANYTIME YOU ARE USING NODE STANDARD LIBRARY STUFF IN TS
// REMEMBER TO DOWNLOAD @types/node OR YOU WILL GET AN ERROR
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

/*
  This project is large and can be confusing to look through but
  what we're trying to accomplish here is 2 different paths to make
  this code reuseable,

  We tried an inheritance pathway that follows a 'is a' pattern
  between classes

  Then we tried a composition pathway that follows a 'has a' pattern
  between classes

  The point that we attempted to make was that sometimes composition can
  give rise to more reusable code
*/

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// find the number of times manchester united won
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
