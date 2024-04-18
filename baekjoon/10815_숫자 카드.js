const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const numberInfo = {};
input[1].split(" ").forEach((str) => {
  numberInfo[str] = true;
});
const inputLine = input[3].split(" ");

const answer = solution(inputLine, numberInfo);
console.log(answer);

function solution(inputLine, numberInfo) {
  return inputLine.map((str) => (str in numberInfo ? 1 : 0)).join(" ");
}
