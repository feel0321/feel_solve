const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, limit] = firstLine.split(" ").map(Number);
input = input.map((line) => line.split(" ").map(Number));

const answer = solution(input, limit, n);
console.log(answer);

function solution(input, limit, n) {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    const emptyArr = Array(limit + 1).fill(0);
    dp.push(emptyArr);
  }

  for (let i = 1; i <= n; i++) {
    const [w, v] = input[i - 1];

    for (let i2 = 1; i2 <= limit; i2++) {
      if (i2 >= w) {
        dp[i][i2] = Math.max(dp[i - 1][i2 - w] + v, dp[i - 1][i2]);
      } else {
        dp[i][i2] = dp[i - 1][i2];
      }
    }
  }

  return dp[n][limit];
}
