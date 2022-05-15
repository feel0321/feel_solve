const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

console.log(solution(input));

function solution(input) {
  let multiple5_count = 0;

  for (let num = 2; num <= input; num++) {
    let number = num;
    let value = 0;

    while ((number / 5) % 1 === 0) {
      number /= 5;
      value += 1;
    }
    multiple5_count += value;
  }

  return multiple5_count;
}
