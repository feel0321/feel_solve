const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.splice(0, 1);
input = input.map(Number);

const answer = solution(input);
console.log(answer);

function solution(input) {
  //   console.log(input);
  const n = input.length;
  const sum = input.map(() => 0);
  sum[0] = input[0];
  sum[1] = input[0] + input[1];
  sum[2] = Math.max(sum[1], input[0] + input[2], input[1] + input[2]);

  for (let i = 3; i < n; i++) {
    sum[i] = Math.max(
      sum[i - 2] + input[i],
      sum[i - 3] + input[i - 1] + input[i],
      sum[i - 1]
    );
  }
  //   console.log(sum);
  return sum[n - 1];
}

// 1 2 3 4
//
// 12 3 => 연속3개라 안됨
// 12 4
// 1 34
// 23
