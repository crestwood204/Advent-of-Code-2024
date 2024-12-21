import readText from "../utils/readText";
import findStartingLocation from "./utils/findStartingLocation";
import traverseGrid from "./utils/traverseGrid";

const problem1 = () => {
  const text = readText("./day6.txt");

  const grid = text.split("\n").map((x) => x.split(""));

  // find starting location
  const startingLocation = findStartingLocation(grid);

  // traverse grid
  const traversedGrid = traverseGrid({ grid, startingLocation });

  // count X's in grid
  const sum = traversedGrid.reduce((acc, row) => {
    return acc + row.filter((x) => x === "X").length;
  }, 0);

  return sum;
};

const ans = problem1();
console.log(ans);

// 133 is too low
