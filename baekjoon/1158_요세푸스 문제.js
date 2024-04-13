const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);

const answer = solution(n, k);
console.log(answer);

function solution(n, k) {
  const memory = Array(n).fill(false);
  const answer = [];
  let index = -1;
  let count = 0;

  while (answer.length < n) {
    index += 1;
    index = index % n;

    if (memory[index]) {
      continue;
    } else {
      count += 1;
      if (count === k) {
        memory[index] = true;
        answer.push(index + 1);
        count = 0;
      }
    }
  }

  return `<${answer.join(", ")}>`;
}
