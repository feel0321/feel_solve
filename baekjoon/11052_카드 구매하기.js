const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
const cardCosts = input.split(" ").map(Number);

const answer = solution(cardCosts, n);
console.log(answer);

function solution(cardCosts, n) {
  dp = [];
  dp.push(cardCosts[0]);

  for (let i = 1; i < n; i++) {
    let max = cardCosts[i];
    for (let i2 = 1; i2 <= i; i2++) {
      max = Math.max(max, dp[i - i2] + cardCosts[i2 - 1]);
    }
    dp.push(max);
  }
  return dp[n - 1];
}
