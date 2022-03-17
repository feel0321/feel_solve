const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [x, y, w, h] = input.split(" ").map(Number);

console.log(solution(x, y, w, h));

function solution(x, y, w, h) {
  return Math.min(x, y, w - x, h - y);
}
