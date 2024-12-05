import readText from "../utils/readText";
import checkIsReportSafeIndex from "./checkIsReportSafeIndex";

const problem2 = () => {
  const text = readText("./day2.txt");

  let numSafeReports = 0;

  const lines = text.split("\n");
  lines.forEach((line) => {
    const report = line
      .split(" ")
      .filter(Boolean)
      .map((x) => parseInt(x));
    const isReportSafe = checkIsReportSafeByOne(report);
    if (isReportSafe) {
      numSafeReports += 1;
    }
  });

  return numSafeReports;
};

const checkIsReportSafeByOne = (report: number[]): boolean => {
  const indexWithError = checkIsReportSafeIndex(report);

  if (isNum(indexWithError)) {
    for (let i = 0; i <= indexWithError; i++) {
      const modifiedReport = JSON.parse(JSON.stringify(report));
      modifiedReport.splice(i, 1);

      const isModifiedReportSafe = checkIsReportSafeIndex(modifiedReport);
      if (isModifiedReportSafe === true) {
        return true;
      }
    }

    return false;
  }

  return true;
};

const isNum = (index: number | boolean): index is number => {
  return typeof index === "number";
};

const answer = problem2();
console.log(answer);
