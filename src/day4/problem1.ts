import readText from "../utils/readText";
import findWords from "./findWords/index";

const problem1 = () => {
  const text = readText("./day4.txt");

  const rows = text.split("\n");
  const grid = rows.map((row) => row.split(""));

  const WORD_TO_FIND = "XMAS";
  let numWordsFound = 0;

  for (let yIndex = 0; yIndex < grid.length; yIndex++) {
    for (let xIndex = 0; xIndex < grid[0].length; xIndex++) {
      if (grid[yIndex][xIndex] === WORD_TO_FIND[0]) {
        const numWords = findWords({
          grid,
          word: WORD_TO_FIND,
          startIndex: [yIndex, xIndex],
        });

        numWordsFound += numWords;
      }
    }
  }

  return numWordsFound;
};

const ans = problem1();
console.log(ans);
