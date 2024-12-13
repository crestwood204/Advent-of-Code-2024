import {
  Direction,
  getNextLocation,
  incrementMap,
  nextDirection,
} from "./traversalUtilities";

type Props = {
  grid: string[][];
  startingLocation: [y: number, x: number];
};

const traverseGrid = ({ grid, startingLocation }: Props): string[][] => {
  const markedGrid = JSON.parse(JSON.stringify(grid));

  const [startY, startX] = startingLocation;
  let [currentY, currentX] = [startY, startX];
  let direction = Direction.Up;

  while (!isOutOfGrid({ grid, location: [currentY, currentX] })) {
    // mark current space
    markedGrid[currentY][currentX] = "X";

    // if space in front is #, turn right
    const [tempNewY, tempNewX] = getNextLocation({
      direction,
      location: [currentY, currentX],
    });

    if (!isOutOfGrid({ grid, location: [tempNewY, tempNewX] })) {
      if (grid[tempNewY][tempNewX] === "#") {
        direction = nextDirection[direction];
      }
    }

    // increment
    const [newY, newX] = getNextLocation({
      direction,
      location: [currentY, currentX],
    });
    currentY = newY;
    currentX = newX;
  }

  return markedGrid;
};

export default traverseGrid;

type IsOutOfGridProps = {
  grid: string[][];
  location: [y: number, x: number];
};

const isOutOfGrid = ({ grid, location }: IsOutOfGridProps) => {
  const [y, x] = location;
  if (y < 0 || y >= grid.length) {
    return true;
  }

  if (x < 0 || x >= grid[0].length) {
    return true;
  }

  return false;
};
