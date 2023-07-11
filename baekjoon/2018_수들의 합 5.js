const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [target] = fs.readFileSync(filePath).toString().trim().split("\n");
target = Number(target);

const answer = solution(target);
console.log(answer);

function solution(target) {
  let start = 1;
  let end = 1;
  let sum = 1;
  let count = 0;

  while (end <= target) {
    if (sum === target) {
      count += 1;
    }

    if (sum >= target) {
      sum -= start;
      start += 1;
    } else {
      end += 1;
      sum += end;
    }
  }

  return count;
}
