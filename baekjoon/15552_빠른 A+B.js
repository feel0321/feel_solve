const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";

rl.on("line", function (line) {
  const inputLine = line.split(" ");

  if (inputLine.length > 1) {
    const [num1, num2] = inputLine.map((element) => Number(element));
    result += solution(num1, num2);
  }
}).on("close", function () {
  console.log(result);
  process.exit();
});

function solution(a, b) {
  return `${a + b}\n`;
}
