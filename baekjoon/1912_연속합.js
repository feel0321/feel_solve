const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.split(" ").map(Number);

const answer = solution(input);
console.log(answer);

function solution(input) {
  let max = input[0];
  const dp = [];
  dp.push(input[0]);

  for (let i = 1; i < input.length; i++) {
    const tempResult = Math.max(input[i], dp[i - 1] + input[i]);
    dp.push(tempResult);
    max = Math.max(max, tempResult);
  }

  return max;
}
