const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let idx = 0;
let answer = "";

while (input[idx]) {
  answer += solution(input, idx);
  idx += 2;
}

console.log(answer);

function solution(input, idx) {
  let [count, index] = input[idx++].split(" ");
  index = Number(index);

  const q = input[idx].split(" ").map((element, idx) => [Number(element), idx]);
  let printCount = 0;

  while (q.length) {
    const [value, i] = q.shift();

    const max = q.find(([qValue]) => qValue > value);
    if (max) {
      q.push([value, i]);
    } else {
      printCount += 1;
      if (i === index) {
        return `${printCount}\n`;
      }
    }
  }
}
