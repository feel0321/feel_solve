const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));

function solution(data) {
  if (!data.length) return 0;
  if (!data.includes(" ")) return 1;
  return data.split(" ").length;
}
