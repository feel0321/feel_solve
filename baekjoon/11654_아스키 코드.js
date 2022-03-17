const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(data) {
  return data.charCodeAt();
}
