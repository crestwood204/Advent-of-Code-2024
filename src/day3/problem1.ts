import readText from "../utils/readText";
import getTotal from "./getTotal";

const problem1 = () => {
  const text = readText("./day3.txt");

  return getTotal(text);
};

const ans = problem1();
console.log(ans);
