const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((element) => element.split(" ").map(Number));

console.log(solution(input));

function solution(input) {
  let answer = "";

  input.forEach(([weight, tall], idx) => {
    answer +=
      input.filter(
        ([inputWeight, inputTall]) => inputWeight > weight && inputTall > tall
      ).length + 1;
    if (idx === input.length - 1) return;
    answer += " ";
  });
  return answer;
}
