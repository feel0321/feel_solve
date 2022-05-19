const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

console.log(solution(input));

function solution(input) {
  const dp = [0, 1];

  for (let i = 2; i <= input; i++) {
    let min_value = Number.MAX_SAFE_INTEGER;
    let i2 = 1;

    while (i2 ** 2 <= i) {
      min_value = Math.min(min_value, dp[i - i2 ** 2]);
      i2 += 1;
    }
    dp.push(min_value + 1);
  }

  return dp[input];
}
