"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
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
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// find the number of times manchester united won
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
