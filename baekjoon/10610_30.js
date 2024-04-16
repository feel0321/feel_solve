const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input[0]);
console.log(answer);

function solution(stringNum) {
  const arr = stringNum.split("");
  if (!arr.includes("0")) return -1;

  const sum = arr.reduce((result, str) => (result += Number(str)), 0);
  if (sum % 3 === 0) {
    return arr.sort((a, b) => Number(b) - Number(a)).join("");
  } else {
    return -1;
  }
}
