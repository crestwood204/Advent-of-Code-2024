import readText from "../utils/readText";
import getCorrectTotal from "./getCorrectTotal";
import getMedian from "./getMedian";
import getNotAfterRules from "./getNotAfterRules";

const problem2 = () => {
  const text = readText("./day5.txt");

  const [rulesList, allPageNums] = text.split("\n\n");

  const rules = rulesList.split("\n");
  const pageNumsList = allPageNums
    .split("\n")
    .map((x) => x.split(",").filter(Boolean));

  // create a dictionary of rules: num => nums that can't come after
  const notAfter = getNotAfterRules(rules);

  let correctTotal: number = 0;
  let incorrectTotal: number = 0;

  // for each line, encounter a number, get the ones that can't come after
  pageNumsList.forEach((pageNums) => {
    const { failed, total } = getMedian({ pageNums, rules: notAfter });

    if (failed) {
      incorrectTotal += getCorrectTotal({ pageNums, rules: notAfter });
    } else {
      correctTotal += total;
    }
  });

  return incorrectTotal;
};

const ans = problem2();
console.log(ans);

// 11025 - too high
