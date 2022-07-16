const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [caseCount, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

console.log(solution(input));

function solution(input) {
  const dp = [1, 1, 1, 2, 2];
  const max = Math.max(...input);

  while (max > dp.length) {
    const newValue = dp[dp.length - 1] + dp[dp.length - 5];
    dp.push(newValue);
  }

  return input.map((num) => dp[num - 1]).join("\n");
}
