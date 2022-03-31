const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, command1, m, command2] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
command1 = command1.split(" ");
command2 = command2.split(" ");

console.log(solution(command1, command2));

function solution(command1, command2) {
  let answer = "";
  const info = {};

  command1.forEach((str) => {
    info[str] = 1;
  });
  command2.forEach((str) => {
    answer += `${info[str] ? 1 : 0}\n`;
  });
  return answer;
}
