const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [num1, num2] = line.split(" ");
  console.log(Number(num1) - Number(num2));
  rl.close();
}).on("close", function () {
  process.exit();
});
