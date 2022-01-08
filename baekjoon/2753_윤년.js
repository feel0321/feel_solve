const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(Number(line)));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 1;
  return 0;
}
