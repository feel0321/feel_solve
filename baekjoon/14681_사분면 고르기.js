const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  const [num1, num2] = input;
  console.log(solution(num1, num2));
  process.exit();
});

function solution(x, y) {
  if (x > 0) {
    if (y > 0) return 1;
    return 4;
  }
  if (y > 0) return 2;
  return 3;
}
