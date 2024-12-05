enum Direction {
  Increasing = "Increasing",
  Decreasing = "Decreasing",
}

/*
 * Copy of checkIsReportSafe from problem 1, but returns the index it failed on instead of false.
 */
const checkIsReportSafeIndex = (report: number[]): boolean | number => {
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
      return i;
    }

    const isIncreasing = difference > 0;
    const isDecreasing = !isIncreasing;

    // check direction
    if (direction) {
      if (isIncreasing && direction === Direction.Decreasing) {
        return i;
      }
      if (isDecreasing && direction === Direction.Increasing) {
        return i;
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

export default checkIsReportSafeIndex;
