const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.split(" ").map(Number);

const answer = solution(n, k);
console.log(answer);

function solution(n, k) {
  const arr = Array(n + 1).fill(true);
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (!arr[i]) continue;

    for (let i2 = i; i2 <= n; i2 += i) {
      if (!arr[i2]) continue;

      arr[i2] = false;
      answer += 1;
      if (answer === k) {
        return i2;
      }
    }
  }
}
