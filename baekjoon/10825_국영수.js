const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input);
console.log(answer);

function solution(input) {
  input = input.map((line) => line.split(" "));
  input.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  input.sort((a, b) => Number(b[3]) - Number(a[3]));
  input.sort((a, b) => Number(a[2]) - Number(b[2]));
  input.sort((a, b) => Number(b[1]) - Number(a[1]));

  return input.map((line) => line[0]).join("\n");
}
