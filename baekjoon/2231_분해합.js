const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(data) {
  let min = Number(data) - data.length * 9;
  for (let val = min; val < Number(data); val++) {
    let sum = val;
    for (let str of String(val)) sum += Number(str);
    if (sum === Number(data)) return val;
  }
  return 0;
}
