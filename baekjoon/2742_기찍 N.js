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

function solution(number) {
  let result = "";
  for (let i = number; i > 0; i--) result += `${i}\n`;
  return result;
}
