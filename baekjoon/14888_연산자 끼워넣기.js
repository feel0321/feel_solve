const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, numbers, operatorCounts] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = Number(n);
numbers = numbers.split(" ").map(Number);
operatorCounts = operatorCounts.split(" ").map(Number);

const answer = solution(n, numbers, operatorCounts);
console.log(answer);

function solution(n, numbers, operatorCounts) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let [add, minus, mul, div] = operatorCounts;

  dfs(1, numbers[0]);

  return `${max}\n${min}`;

  function dfs(count, current) {
    if (count == n) {
      max = Math.max(max, current);
      min = Math.min(min, current);
      return;
    }

    if (add > 0) {
      add -= 1;
      dfs(count + 1, current + numbers[count]);
      add += 1;
    }
    if (minus > 0) {
      minus -= 1;
      dfs(count + 1, current - numbers[count]);
      minus += 1;
    }
    if (mul > 0) {
      mul -= 1;
      dfs(count + 1, current * numbers[count]);
      mul += 1;
    }
    if (div > 0) {
      div -= 1;
      const next = current / numbers[count];
      dfs(count + 1, next > 0 ? Math.floor(next) : Math.ceil(next));
      div += 1;
    }
  }
}
