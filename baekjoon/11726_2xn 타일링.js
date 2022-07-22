const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

console.log(solution(input));

function solution(input) {
  const dp = [1, 2];

  while (input > dp.length) {
    const newValue = (dp[dp.length - 1] + dp[dp.length - 2]) % 10007;
    dp.push(newValue);
  }
  return dp[input - 1];
}

/*
2 x 1 => = 1
2 x 2 => =, || 2
2 x 3 => = |, |=, ||| 3
2 x 4 => ==, =||, ||=, |=|, |||| 5
*/
