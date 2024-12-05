import fs from "fs";
import path from "path";

const readText = (fileName: string) => {
  const currDir = path.resolve(__dirname, "../../input");
  const data = fs.readFileSync(path.resolve(currDir, fileName), {
    encoding: "utf8",
    flag: "r",
  });

  return data;
};

export default readText;
