import { GridIndex } from "./GridIndex";

type Props = {
  grid: string[][];
  word: string;
  startIndex: GridIndex;
  transform: GridIndex;
};

const searchDirection = ({
  grid,
  word,
  startIndex,
  transform,
}: Props): boolean => {
  const [transformY, transformX] = transform;
  let gridIndex: GridIndex = startIndex;

  for (let i = 0; i < word.length; i++) {
    const wordLetter = word[i];
    const [y, x] = gridIndex;
    if (outOfBounds({ grid, gridIndex })) {
      return false;
    }

    const gridLetter = grid[y][x];

    if (gridLetter !== wordLetter) {
      return false;
    }

    gridIndex = [y + transformY, x + transformX];
  }
  return true;
};

export default searchDirection;

export const outOfBounds = ({
  grid,
  gridIndex,
}: {
  grid: string[][];
  gridIndex: GridIndex;
}): boolean => {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  const [y, x] = gridIndex;

  if (y < 0 || y >= gridHeight) {
    return true;
  }
  if (x < 0 || x >= gridWidth) {
    return true;
  }

  return false;
};
