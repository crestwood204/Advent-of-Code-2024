type Props = {
  pageNums: string[];
  rules: Record<string, string[]>;
};

const getMedian = ({ pageNums, rules }: Props) => {
  const disallowList: string[] = [];
  let failed = false;

  for (let i = 0; i < pageNums.length; i++) {
    const pageNum = pageNums[i];

    if (disallowList.includes(pageNum)) {
      failed = true;
      break;
    }

    if (rules.hasOwnProperty(pageNum)) {
      disallowList.push(...rules[pageNum]);
    }
  }

  return {
    failed,
    total: failed ? 0 : parseInt(pageNums[(pageNums.length + 1) / 2 - 1]),
  };
};

export default getMedian;
