const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  const arr = inputData[1].split(" ").map((element) => Number(element));
  arr.sort((a, b) => a - b);
  console.log(solution(arr));
  process.exit();
});

function solution(array) {
  return `${array[0]} ${array[array.length - 1]}`;
}
