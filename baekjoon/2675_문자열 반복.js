const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(data) {
  let answer = "";
  for (let command of data) {
    let [num, str] = command.split(" ");
    num = Number(num);
    if (!str) continue;
    for (let strOne of str) {
      for (let count = 0; count < num; count++) {
        answer += strOne;
      }
    }
    answer += "\n";
  }
  return answer;
}
