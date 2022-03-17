const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.split(" ").map(Number);
const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];

console.log(solution(input));

function solution(data) {
  let score = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === ascending[i]) {
      score += 1;
    } else if (data[i] === descending[i]) {
      score -= 1;
    }
  }
  if (score === 8) return "ascending";
  if (score === -8) return "descending";
  return "mixed";
}
