import { GridIndex } from "./findWords/GridIndex";
import { outOfBounds } from "./findWords/searchDirection";

type Props = {
  grid: string[][];
  gridIndex: GridIndex;
  letters: string[];
};

const findXMAS = ({ grid, gridIndex, letters }: Props) => {
  if (letters.length !== 4) {
    throw new Error("invalid letters");
  }

  const [y, x] = gridIndex;

  // check top-left
  if (
    outOfBounds({ grid, gridIndex: [y - 1, x - 1] }) ||
    grid[y - 1][x - 1] !== letters[0]
  ) {
    return false;
  }

  // check bottom-left
  if (
    outOfBounds({ grid, gridIndex: [y + 1, x - 1] }) ||
    grid[y + 1][x - 1] !== letters[3]
  ) {
    return false;
  }

  // check top-right
  if (
    outOfBounds({ grid, gridIndex: [y - 1, x + 1] }) ||
    grid[y - 1][x + 1] !== letters[2]
  ) {
    return false;
  }

  // check bottom-right
  if (
    outOfBounds({ grid, gridIndex: [y + 1, x + 1] }) ||
    grid[y + 1][x + 1] !== letters[1]
  ) {
    return false;
  }

  return true;
};

export default findXMAS;
