const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, kind, count, coupon] = firstLine.split(" ").map(Number);
const sushies = input.map((line) => Number(line));

const answer = solution(sushies, n, count, coupon);
console.log(answer);

function solution(sushies, n, count, coupon) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    const sushi = sushies[i];
    const set = new Set();
    set.add(sushi);

    for (let i2 = i; i2 < i + count; i2++) {
      const sushi2 = sushies[i2 % n];
      set.add(sushi2);
    }
    set.add(coupon);
    max = Math.max(max, set.size);
  }
  return max;
}
