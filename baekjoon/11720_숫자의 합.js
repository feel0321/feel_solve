const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [num, command] = fs.readFileSync(filePath).toString().trim().split("\n");
num = Number(num);

console.log(solution(num, command));

function solution(num, command) {
  let answer = 0;
  for (let i = 0; i < num; i++) {
    answer += Number(command[i]);
  }
  return answer;
}
