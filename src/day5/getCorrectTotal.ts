import getMedian from "./getMedian";

type Props = {
  pageNums: string[];
  rules: Record<string, string[]>;
};

const getCorrectTotal = ({ pageNums, rules }: Props): number => {
  const newPageNums = correctPageNums({ pageNums, rules });

  const { failed, total } = getMedian({ pageNums: newPageNums, rules });

  if (failed) {
    throw new Error("corrections failed");
  }

  return total;
};

export default getCorrectTotal;

const correctPageNums = ({ pageNums, rules }: Props) => {
  const disallowList: string[] = [];

  for (let i = 0; i < pageNums.length; i++) {
    const pageNum = pageNums[i];

    if (disallowList.includes(pageNum)) {
      // naive - this could be so much better but lazy
      if (i === 0) {
        throw new Error("this shouldn't be possible");
      }

      // swap
      const pageNumsCopy = JSON.parse(JSON.stringify(pageNums));
      const temp = pageNum;
      pageNumsCopy[i] = pageNums[i - 1];
      pageNumsCopy[i - 1] = temp;
      return correctPageNums({ pageNums: pageNumsCopy, rules });
    }

    if (rules.hasOwnProperty(pageNum)) {
      disallowList.push(...rules[pageNum]);
    }
  }
  return pageNums;
};
