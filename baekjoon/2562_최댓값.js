const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(Number(line));
}).on("close", function () {
  console.log(solution(inputData));
  process.exit();
});

function solution(arr) {
  sortedArr = [...arr].sort((a, b) => b - a);
  return `${sortedArr[0]}\n${arr.indexOf(sortedArr[0]) + 1}`;
}
