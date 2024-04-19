const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input);
console.log(answer);

function solution(input) {
  const answer = [];

  for (let i = 0; i < input.length; i += 3) {
    const n = Number(input[i]);
    const dp = Array.from({ length: 2 }, () => Array(n).fill(0));
    const numbers = [];
    numbers.push(input[i + 1].split(" ").map(Number));
    numbers.push(input[i + 2].split(" ").map(Number));

    dp[0][0] = numbers[0][0];
    dp[1][0] = numbers[1][0];
    if (n === 1) {
      answer.push(Math.max(dp[0][0], dp[1][0]));
      continue;
    }

    dp[0][1] = numbers[1][0] + numbers[0][1];
    dp[1][1] = numbers[0][0] + numbers[1][1];
    if (n === 2) {
      answer.push(Math.max(dp[0][1], dp[1][1]));
      continue;
    }

    for (let i2 = 2; i2 < n; i2++) {
      dp[0][i2] = Math.max(dp[1][i2 - 2], dp[1][i2 - 1]) + numbers[0][i2];
      dp[1][i2] = Math.max(dp[0][i2 - 2], dp[0][i2 - 1]) + numbers[1][i2];
    }
    answer.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
  }

  return answer.join("\n");
}
