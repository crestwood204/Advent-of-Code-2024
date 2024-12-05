import fs from "fs";

const readText = (fileName: string) => {
  const data = fs.readFileSync(fileName, { encoding: "utf8", flag: "r" });

  return data;
};

export default readText;
