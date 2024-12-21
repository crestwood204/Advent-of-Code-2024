const findStartingLocation = (grid: string[][]): [y: number, x: number] => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "^") {
        return [i, j];
      }
    }
  }

  throw new Error("Failed to find start location");
};

export default findStartingLocation;
