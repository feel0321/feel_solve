const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
const cardCosts = input.split(" ").map(Number);

const answer = solution(cardCosts, n);
console.log(answer);

function solution(cardCosts, n) {
  const dp = [];
  dp.push(cardCosts[0]);

  for (let i = 1; i < n; i++) {
    let min = cardCosts[i];
    for (let i2 = 1; i2 <= i; i2++) {
      min = Math.min(min, dp[i - i2] + dp[i2 - 1]);
    }
    dp.push(min);
  }
  return dp[n - 1];
}
