const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [num1, num2] = line.split(" ");
  solution(Number(num1), Number(num2));
  rl.close();
}).on("close", function () {
  process.exit();
});

const solution = (a, b) => {
  console.log(Number(a) + Number(b));
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b, 10));
  console.log(a % b);
};
