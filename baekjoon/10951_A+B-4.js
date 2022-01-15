const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";

rl.on("line", function (line) {
  const [num1, num2] = line.split(" ").map((element) => Number(element));
  result += `${num1 + num2}\n`;
}).on("close", function () {
  console.log(result);
  process.exit();
});
