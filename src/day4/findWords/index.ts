import { GridIndex } from "./GridIndex";
import searchDirection from "./searchDirection";

type Props = {
  grid: string[][];
  word: string;
  startIndex: GridIndex;
};

const findWords = ({ grid, word, startIndex }: Props): number => {
  const transforms: GridIndex[] = [
    // top
    [-1, -1],
    [-1, 0],
    [-1, 1],
    // center
    [0, -1],
    [0, 0],
    [0, 1],
    // bottom
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let foundWords = 0;

  transforms.forEach((transform) => {
    const hasFoundWord = searchDirection({
      grid,
      word,
      startIndex,
      transform,
    });

    if (hasFoundWord) {
      foundWords += 1;
    }
  });

  return foundWords;
};

export default findWords;
