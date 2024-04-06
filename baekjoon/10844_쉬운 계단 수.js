const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(Number(input[0]));
console.log(answer);

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));
  const modular = 1000000000;

  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let i2 = 0; i2 <= 9; i2++) {
      if (i2 === 0) {
        // dp[i][0] = dp[i - 1][0]
        dp[i][i2] = dp[i - 1][i2 + 1] % modular;
      } else if (i2 === 9) {
        // dp[i][9] = dp[i - 1][8]
        dp[i][i2] = dp[i - 1][i2 - 1] % modular;
      } else {
        dp[i][i2] = (dp[i - 1][i2 - 1] + dp[i - 1][i2 + 1]) % modular;
      }
    }
  }

  return dp[n].reduce((result, num) => result + num) % modular;
}
