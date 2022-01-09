const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const inputLine = line.split(" ");
  if (inputLine.length > 1) {
    const [num1, num2] = inputLine.map((element) => Number(element));
    console.log(num1 + num2);
  }
}).on("close", function () {
  process.exit();
});
