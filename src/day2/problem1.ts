import readText from "../utils/readText";

const problem1 = () => {
  const text = readText("./day2problem1.txt");

  let numSafeReports = 0;

  const lines = text.split("\n");
  lines.forEach((line) => {
    const report = line
      .split(" ")
      .filter(Boolean)
      .map((x) => parseInt(x));
    const isReportSafe = checkIsReportSafe(report);
    if (isReportSafe) {
      numSafeReports += 1;
    }
  });

  return numSafeReports;
};

enum Direction {
  Increasing = "Increasing",
  Decreasing = "Decreasing",
}

const checkIsReportSafe = (report: number[]): boolean => {
  let direction: Direction | null = null;

  if (!report.length) {
    return true;
  }

  let prevLevel = report[0];

  for (let i = 1; i < report.length; i++) {
    const currLevel = report[i];

    // handle difference
    const difference = currLevel - prevLevel;
    const absDifference = Math.abs(difference);

    if (absDifference < 1 || absDifference > 3) {
      return false;
    }

    const isIncreasing = difference > 0;
    const isDecreasing = !isIncreasing;

    // check direction
    if (direction) {
      if (isIncreasing && direction === Direction.Decreasing) {
        return false;
      }
      if (isDecreasing && direction === Direction.Increasing) {
        return false;
      }
    } else {
      // set direction
      if (isIncreasing) {
        direction = Direction.Increasing;
      } else {
        direction = Direction.Decreasing;
      }
    }

    prevLevel = currLevel;
  }

  return true;
};

const answer = problem1();
console.log(answer);
