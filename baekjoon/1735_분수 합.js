const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n1, n2] = input[0].split(" ").map(Number);
const [n3, n4] = input[1].split(" ").map(Number);

const answer = solution(n1, n2, n3, n4);
console.log(answer);

function solution(n1, n2, n3, n4) {
  const bottom = getBottom(n2, n4);
  let top = 0;
  top += (bottom / n2) * n1;
  top += (bottom / n4) * n3;

  for (let i = Math.max(top, bottom); i >= 2; i--) {
    if (top % i === 0 && bottom % i === 0) {
      return `${top / i} ${bottom / i}`;
    }
  }

  return `${top} ${bottom}`;
}

function getBottom(num1, num2) {
  for (let i = Math.min(num1, num2); i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}
