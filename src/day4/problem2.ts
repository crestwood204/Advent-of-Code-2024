import readText from "../utils/readText";
import findXMAS from "./findXMAS";

const problem2 = () => {
  const text = readText("./day4.txt");

  const rows = text.split("\n");
  const grid = rows.map((row) => row.split(""));

  let numWordsFound = 0;

  /*
   * M   S
   *   A
   * M    S
   */

  for (let yIndex = 0; yIndex < grid.length; yIndex++) {
    for (let xIndex = 0; xIndex < grid[0].length; xIndex++) {
      if (grid[yIndex][xIndex] === "A") {
        const isXMAS =
          findXMAS({
            grid,
            gridIndex: [yIndex, xIndex],
            letters: ["M", "S", "M", "S"],
          }) ||
          findXMAS({
            grid,
            gridIndex: [yIndex, xIndex],
            letters: ["S", "M", "M", "S"],
          }) ||
          findXMAS({
            grid,
            gridIndex: [yIndex, xIndex],
            letters: ["S", "M", "S", "M"],
          }) ||
          findXMAS({
            grid,
            gridIndex: [yIndex, xIndex],
            letters: ["M", "S", "S", "M"],
          });

        if (isXMAS) {
          numWordsFound += 1;
        }
      }
    }
  }

  return numWordsFound;
};

const ans = problem2();
console.log(ans);

// 470 too low
