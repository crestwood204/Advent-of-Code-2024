import readText from "../utils/readText";
import getTotal from "./getTotal";

const problem2 = () => {
  const text = readText("./day3.txt");

  const arr = text.split("don't()");

  // first one has implicit do
  const firstTotal = getTotal(arr[0]);

  // for all others, check if it has a do and calculate the total afterwards
  let restTotal = 0;
  arr.unshift();
  arr.forEach((line) => {
    const [_, ...rest] = line.split("do()");
    const valid = rest.join("");
    restTotal += getTotal(valid ?? "");
  });

  return firstTotal + restTotal;
};

const ans = problem2();
console.log(ans);
