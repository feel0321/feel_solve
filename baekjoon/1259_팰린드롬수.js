const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

console.log(solution(input));

function solution(data) {
  let answer = "";
  for (let i = 0; i < data.length - 1; i++) {
    answer += check(String(data[i]));
  }
  return answer;
}

function check(string) {
  let half = string.length >> 1;
  for (let i = 0; i < half; i++) {
    if (string[i] !== string[string.length - i - 1]) return "no\n";
  }
  return "yes\n";
}
