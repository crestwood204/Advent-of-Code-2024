import readText from "../utils/readText";

const problem1 = () => {
  const text = readText("./day5.txt");

  const [rulesList, allPageNums] = text.split("\n\n");

  const rules = rulesList.split("\n");
  const pageNumsList = allPageNums
    .split("\n")
    .map((x) => x.split(",").filter(Boolean));

  // create a dictionary of rules: num => nums that can't come after
  const notAfter: Record<string, string[]> = {};

  rules.forEach((rule) => {
    const [before, after] = rule.split("|");

    if (notAfter.hasOwnProperty(after)) {
      notAfter[after].push(before);
    } else {
      notAfter[after] = [before];
    }
  });

  let runningTotal = 0;

  // for each line, encounter a number, get the ones that can't come after
  pageNumsList.forEach((pageNums) => {
    const disallowList: string[] = [];
    let failed = false;

    for (let i = 0; i < pageNums.length; i++) {
      const pageNum = pageNums[i];

      if (disallowList.includes(pageNum)) {
        failed = true;
        break;
      }

      if (notAfter.hasOwnProperty(pageNum)) {
        disallowList.push(...notAfter[pageNum]);
      }
    }

    // calculate median number
    if (!failed) {
      runningTotal += parseInt(pageNums[(pageNums.length + 1) / 2 - 1]);
    }
  });

  return runningTotal;
};

const ans = problem1();
console.log(ans);
