import {
  Direction,
  getNextLocation,
  nextDirection,
} from "./traversalUtilities";

type Props = {
  grid: string[][];
  startingLocation: [y: number, x: number];
};

const traverseGrid = ({ grid, startingLocation }: Props): string[][] => {
  const markedGrid = JSON.parse(JSON.stringify(grid));

  // this should be a more robust check - but happens to work for this
  const maxLength = 10000;
  let currentTraversal = 0;

  const [startY, startX] = startingLocation;
  let [currentY, currentX] = [startY, startX];
  let direction = Direction.Up;

  while (!isOutOfGrid({ grid, location: [currentY, currentX] })) {
    if (currentTraversal > maxLength) {
      throw new Error("Infinite Loop");
    }
    currentTraversal++;

    // mark current space
    markedGrid[currentY][currentX] = "X";

    // if space in front is #, turn right
    direction = getNextDirection({
      grid,
      location: [currentY, currentX],
      direction,
    });

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

type GetNextDirectionProps = IsOutOfGridProps & {
  direction: Direction;
};

const getNextDirection = ({
  grid,
  location,
  direction,
}: GetNextDirectionProps) => {
  const [currentY, currentX] = location;

  let [newY, newX] = [currentY, currentX];
  let newDirection = direction;
  let turns = 0;

  while (true) {
    if (turns > 4) {
      throw new Error("Turning infinitely");
    }

    // if space in front is #, turn right
    const [tempNewY, tempNewX] = getNextLocation({
      direction: newDirection,
      location: [currentY, currentX],
    });

    newY = tempNewY;
    newX = tempNewX;

    if (isOutOfGrid({ grid, location: [newY, newX] })) {
      return newDirection;
    }

    if (grid[newY][newX] === "#") {
      turns++;
      newDirection = nextDirection[newDirection];
    } else {
      return newDirection;
    }
  }
};
