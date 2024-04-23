const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, target] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

const answer = solution(numbers, n, target);
console.log(answer);

function solution(numbers, n, target) {
  let count = 0;
  dfs(0, 0);

  return count;

  function dfs(index, currentSum) {
    if (index >= n) return;

    const nextSum = currentSum + numbers[index];
    if (nextSum === target) {
      count += 1;
    }
    dfs(index + 1, nextSum);
    dfs(index + 1, currentSum);
  }
}
