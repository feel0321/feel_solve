const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

console.log(solution(input));

function solution(data) {
  let home = 1;
  let jump = 1;

  while (data > home) {
    home += 6 * jump;
    jump += 1;
  }
  return jump;
}
