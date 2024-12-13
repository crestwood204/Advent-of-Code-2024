type Props = {
  grid: string[][];
  startingLocation: [y: number, x: number];
};

const printGrid = ({ grid, startingLocation }: Props) => {
  const gridCopy = JSON.parse(JSON.stringify(grid)) as string[][];
  gridCopy[startingLocation[0]][startingLocation[1]] = "^";
  const gridRows = gridCopy.map((row) => row.join(""));
  console.log(gridRows.join("\n"));
};

export default printGrid;
