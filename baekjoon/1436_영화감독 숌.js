const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

console.log(solution(input));

function solution(input) {
  let start = 666;
  let count = 0;
  while (1) {
    if (String(start).includes("666")) {
      count += 1;
    }
    if (count === input) break;
    start += 1;
  }
  return start;
}
