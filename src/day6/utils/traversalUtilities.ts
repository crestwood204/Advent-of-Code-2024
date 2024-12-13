export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export const incrementMap: Record<
  Direction,
  [incrementY: number, incrementX: number]
> = {
  [Direction.Up]: [-1, 0],
  [Direction.Down]: [1, 0],
  [Direction.Left]: [0, -1],
  [Direction.Right]: [0, 1],
};

export const nextDirection: Record<Direction, Direction> = {
  [Direction.Up]: Direction.Right,
  [Direction.Down]: Direction.Left,
  [Direction.Left]: Direction.Up,
  [Direction.Right]: Direction.Down,
};

type GetNextLocationProps = {
  direction: Direction;
  location: [y: number, x: number];
};

export const getNextLocation = ({
  direction,
  location,
}: GetNextLocationProps): [y: number, x: number] => {
  let [currentY, currentX] = location;
  const [incrementY, incrementX] = incrementMap[direction];
  const [newY, newX] = [currentY + incrementY, currentX + incrementX];

  return [newY, newX];
};
