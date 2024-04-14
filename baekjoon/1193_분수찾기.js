const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);

const answer = solution(n);
console.log(answer);

function solution(n) {
  let diagonal = 1;
  let count = 0;

  while (count + diagonal < n) {
    count += diagonal;
    diagonal++;
  }
  const position = n - count;
  if (diagonal % 2 === 0) {
    return `${position}/${diagonal - position + 1}`;
  } else {
    return `${diagonal - position + 1}/${position}`;
  }
}
