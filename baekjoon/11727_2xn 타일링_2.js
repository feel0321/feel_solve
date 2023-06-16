const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);

const answer = solution(n);
console.log(answer);

/*
타일의 종류가 1x2, 2x1, 2x2 3종류
세로길이 2로 고정이니 n-1과 n-2일때로 나눈다

n-1까지에서는 1x2 1개만 올 수 있다 => 방법은 1개
n-2까지에서는 1x2 2개 || 2x1 2개 || 2x2 1개가 올 수 있지만, 1x2 2개가 오는 경우는 위와 중복이다 => 방법은 3-1로 2개

따라서 dp[n] = dp[n-1] + dp[n-2] + dp[n-2] = dp[n-1] + 2 * dp[n-2]
*/
function solution(n) {
  const dp = [1, 3];
  let i = 2;
  while (i < n) {
    const next = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
    dp.push(next);
    i += 1;
  }
  return dp[n - 1];
}
