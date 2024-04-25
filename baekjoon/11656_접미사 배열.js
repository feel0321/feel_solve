const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input[0]);
console.log(answer);

function solution(inputString) {
  const strings = [];
  for (let i = 0; i < inputString.length; i++) {
    strings.push(inputString.slice(i));
  }

  return strings.sort((a, b) => a.localeCompare(b)).join("\n");
}
