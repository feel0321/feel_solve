const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, counts, numbers] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = Number(n);
counts = counts.split(" ").map(Number);
numbers = numbers.split(" ").map(Number);

const answer = solution(counts, numbers, n);
console.log(answer);

function solution(counts, numbers, n) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const sortedCounts = counts.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += sortedNumbers[i] * sortedCounts[i];
  }

  return sum;
}
