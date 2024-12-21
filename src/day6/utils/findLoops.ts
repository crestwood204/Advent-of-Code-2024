import traverseGrid from "./traverseGrid";

type Props = {
  grid: string[][];
  markedGrid: string[][];
  startingLocation: [y: number, x: number];
};

const findLoops = ({ grid, markedGrid, startingLocation }: Props) => {
  let numLoops = 0;

  for (let i = 0; i < markedGrid.length; i++) {
    for (let j = 0; j < markedGrid[i].length; j++) {
      // attempt to place a block here
      if (markedGrid[i][j] === "X") {
        try {
          const gridCopy = JSON.parse(JSON.stringify(grid)) as string[][];
          gridCopy[i][j] = "#";
          traverseGrid({ grid: gridCopy, startingLocation });
        } catch (e) {
          numLoops += 1;
        }
      }
    }
  }
  return numLoops;
};

export default findLoops;
