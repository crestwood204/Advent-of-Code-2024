import readText from "../utils/readText";

const problem2 = () => {
  const text = readText("./day1.txt");

  const list1: number[] = [];
  const list2Freq: Record<string, number> = {};

  const lines = text.split("\n");
  lines.forEach((line) => {
    const [num1, num2] = line.split(" ").filter(Boolean);
    list1.push(parseInt(num1));

    if (list2Freq.hasOwnProperty(num2)) {
      list2Freq[num2] += 1;
    } else {
      list2Freq[num2] = 1;
    }
  });

  let similarityScore = 0;
  list1.forEach((num) => {
    const freq = list2Freq[num] ?? 0;
    similarityScore += num * freq;
  });

  return similarityScore;
};

const ans = problem2();
console.log(ans);
