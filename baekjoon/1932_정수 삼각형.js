const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);

const answer = solution(input, n);
console.log(answer);

function solution(input, n) {
  const numberArr = [];
  const dp = [];

  input.forEach((line) => {
    const numbers = line.split(" ").map(Number);
    numberArr.push(numbers);
  });
  dp.push(numberArr[0]);

  for (let y = 1; y < n; y++) {
    const numbers = [];
    for (let x = 0; x < y + 1; x++) {
      if (x === 0) {
        numbers.push(numberArr[y][x] + dp[y - 1][x]);
      } else if (x === y) {
        numbers.push(numberArr[y][x] + dp[y - 1][x - 1]);
      } else {
        const max = Math.max(dp[y - 1][x - 1], dp[y - 1][x]);
        numbers.push(numberArr[y][x] + max);
      }
    }
    dp.push(numbers);
  }

  return Math.max(...dp[n - 1]);
}
