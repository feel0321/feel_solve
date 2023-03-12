const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, r, c] = input.split(" ").map(Number);

const answer = solution(n, r, c);
console.log(answer);

function solution(n, r, c) {
  const half = 2 ** n / 2;
  if (n === 0) {
    return 0;
  }

  if (r < half && c < half) {
    return solution(n - 1, r, c);
  }

  const sizeForDiv4 = half * half;
  if (r < half && half <= c) {
    return sizeForDiv4 + solution(n - 1, r, c - half);
  }
  if (half <= r && c < half) {
    return sizeForDiv4 * 2 + solution(n - 1, r - half, c);
  }
  return sizeForDiv4 * 3 + solution(n - 1, r - half, c - half);
}
