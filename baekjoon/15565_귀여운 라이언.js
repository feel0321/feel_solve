const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, secondLine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = firstLine.split(" ").map(Number);
const numbers = secondLine.split(" ").map(Number);
const TARGET = 1;

const answer = solution(numbers, n, k);
console.log(answer);

function solution(numbers, n, k) {
  let left = 0;
  let right = 0;
  let count = 0;
  let minLength = Infinity;

  if (numbers[right] === TARGET) count += 1;

  while (right < n) {
    if (count === k) {
      minLength = Math.min(minLength, right - left + 1);
      if (numbers[left] === TARGET) count -= 1;
      left += 1;
    } else {
      right += 1;
      if (right < n && numbers[right] === TARGET) count += 1;
    }
  }

  return minLength === Infinity ? -1 : minLength;
}
