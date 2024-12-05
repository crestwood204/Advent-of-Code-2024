import readText from "../utils/readText";

const problem1 = () => {
  const text = readText("./day3.txt");

  return getTotal(text);
};

export const getTotal = (text: string) => {
  let total = 0;

  const matchIterator = text.matchAll(/mul\(\d{1,3},\d{1,3}\)/g);
  const matches = [...matchIterator];
  const multiplications = matches.map((x) => x[0]);
  multiplications.forEach((mul) => {
    const mulMatch = mul.match(/\d{1,3},\d{1,3}/g);
    if (mulMatch) {
      const [num1, num2] = mulMatch[0].split(",");
      total += parseInt(num1) * parseInt(num2);
    }
  });
  return total;
};

const ans = problem1();
console.log(ans);
