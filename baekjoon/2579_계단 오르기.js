const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [count, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
count = Number(count);
input = input.map(Number);

solution(input, count);

function solution(input, count) {
  const dp = Array(input.length).fill(0);
  dp[0] = input[0];
  dp[1] = input[0] + input[1];
  dp[2] = Math.max(input[0], input[1]) + input[2];

  for (let i = 3; i < input.length; i += 1) {
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
  }
  console.log(dp);
  console.log(dp[count - 1]);
}

/*
최댓값 구하기

한 번에 1칸 or 2칸 이동
연속 3개의 계단을 밟을수 없음
마지막 계단 무조건 밟기

1칸점프 i-1 => i
i-2 => i-1 => i는 안됨
i-3 => i-1 => i만 가능

2칸점프
i-2 => i
*/
