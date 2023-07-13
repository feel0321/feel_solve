const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, secondLine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = firstLine.split(" ").map(Number);
const numbers = secondLine.split(" ").map(Number);

const answer = solution(numbers, k);
console.log(answer);

function solution(numbers, k) {
  const sums = [];
  sums.push(numbers.slice(0, k).reduce((acc, num) => acc + num, 0));

  for (let i = 1; i < numbers.length - k + 1; i++) {
    const prevSum = sums[i - 1];
    sums.push(prevSum - numbers[i - 1] + numbers[i + k - 1]);
  }

  return Math.max(...sums);
}
