import readText from "../utils/readText";
import findLoops from "./utils/findLoops";
import findStartingLocation from "./utils/findStartingLocation";
import printGrid from "./utils/printGrid";
import traverseGrid from "./utils/traverseGrid";

const problem2 = () => {
  const text = readText("./day6.txt");

  const grid = text.split("\n").map((x) => x.split(""));

  // find starting location
  const startingLocation = findStartingLocation(grid);

  // traverse grid
  const traversedGrid = traverseGrid({ grid, startingLocation });

  traversedGrid[startingLocation[0]][startingLocation[1]] = "^";

  // find loops
  const numLoops = findLoops({
    grid,
    markedGrid: traversedGrid,
    startingLocation,
  });

  return numLoops;
};

const ans = problem2();
console.log(ans);

// 1834 is too high // didn't account for multiple turns
// 1831 is correct
