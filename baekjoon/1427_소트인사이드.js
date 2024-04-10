const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input[0].split("").map(Number));
console.log(answer);

function solution(string) {
  for (let i = 0; i < string.length - 1; i++) {
    for (let i2 = 0; i2 < string.length - 1 - i; i2++) {
      const num = string[i2];
      const next = string[i2 + 1];

      if (next > num) {
        string[i2] = next;
        string[i2 + 1] = num;
      }
    }
  }

  return Number(string.join(""));
}
