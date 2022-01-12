const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  solution(Number(line));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(number) {
  for (let i = 1; i <= number; i++) console.log("*".repeat(i));
}
