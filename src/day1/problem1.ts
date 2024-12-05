import readText from "../utils/readText";

const problem1 = () => {
  const text = readText("./problem1.txt");

  return text.split(" ").slice(0, 10);
};

const answer = problem1();
console.log(answer);
