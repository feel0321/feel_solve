const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(data) {
  let answer = "";
  for (let command of data) {
    command = command.split(" ").map(Number);
    if (!command.reduce((result, element) => (result += element))) {
      return answer;
    }
    let [max] = command.splice(command.indexOf(Math.max(...command)), 1);
    let temp = 0;
    for (let val of command) {
      temp += val ** 2;
    }
    if (temp === max ** 2) {
      answer += "right\n";
      continue;
    }
    answer += "wrong\n";
  }
}
