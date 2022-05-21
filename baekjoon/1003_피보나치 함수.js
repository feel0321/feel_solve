const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [inputCount, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
input = input.map(Number);

console.log(solution(input));

function solution(input) {
  const dp = [
    [1, 0],
    [0, 1],
  ];
  const max = Math.max(...input);

  while (!dp[max]) {
    const [prevZero, prevOne] = dp[dp.length - 2];
    const [lastZero, lastOne] = dp[dp.length - 1];
    const next = [prevZero + lastZero, prevOne + lastOne];
    dp.push(next);
  }

  return input.map((number) => dp[number].join(" ")).join("\n");
}
