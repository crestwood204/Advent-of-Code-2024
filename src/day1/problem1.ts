import readText from "../utils/readText";

const problem1 = () => {
  const text = readText("./problem1.txt");

  const list1: number[] = [];
  const list2: number[] = [];

  const lines = text.split("\n");
  lines.forEach((line) => {
    const [num1, num2] = line.split(" ").filter(Boolean);
    list1.push(parseInt(num1));
    list2.push(parseInt(num2));
  });

  list1.sort();
  list2.sort();

  let runningDifference = 0;

  for (let i = 0; i < list1.length; i++) {
    const difference = Math.abs(list1[i] - list2[i]);

    runningDifference += difference;
  }

  return runningDifference;
};

const answer = problem1();
console.log(answer);
