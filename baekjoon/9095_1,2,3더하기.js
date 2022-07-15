const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(Number);

console.log(solution(input));

function solution(input) {
  const max = Math.max(...input);
  const dp = [1, 2, 4];

  while (dp.length < max) {
    const newData = dp[dp.length - 1] + dp[dp.length - 2] + dp[dp.length - 3];
    dp.push(newData);
  }
  return input.map((num) => dp[num - 1]).join("\n");
}
