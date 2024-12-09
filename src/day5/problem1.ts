import readText from "../utils/readText";
import getMedian from "./getMedian";
import getNotAfterRules from "./getNotAfterRules";

const problem1 = () => {
  const text = readText("./day5.txt");

  const [rulesList, allPageNums] = text.split("\n\n");

  const rules = rulesList.split("\n");
  const pageNumsList = allPageNums
    .split("\n")
    .map((x) => x.split(",").filter(Boolean));

  // create a dictionary of rules: num => nums that can't come after
  const notAfter = getNotAfterRules(rules);

  let runningTotal = 0;

  // for each line, encounter a number, get the ones that can't come after
  pageNumsList.forEach((pageNums) => {
    const { failed, total } = getMedian({ pageNums, rules: notAfter });
    if (!failed) {
      runningTotal += total;
    }
  });

  return runningTotal;
};

const ans = problem1();
console.log(ans);
