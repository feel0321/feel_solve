const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [num1, num2, num3] = line.split(" ");
  solution(Number(num1), Number(num2), Number(num3));
  rl.close();
}).on("close", function () {
  process.exit();
});

const solution = (a, b, c) => {
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
};
