const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input.split(" ").map(Number);

console.log(solution(n, k));

function solution(n, k) {
  const mans = Array.from({ length: n }, (_, idx) => idx + 1);
  let killCount = 0;
  let tempCount = 0;
  let answer = [];

  while (killCount < n) {
    for (let i = 0; i < n; i++) {
      if (mans[i] === 0) continue;
      tempCount += 1;

      if (tempCount === k) {
        mans[i] = 0;
        answer.push(i + 1);
        killCount += 1;
        tempCount = 0;
      }
    }
  }
  return `<${answer.join(", ")}>`;
}
