const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(line.split(" ").map((element) => Number(element)));
}).on("close", function () {
  const [first, second] = inputData;
  const [n, x] = first;
  const result = second.filter((element) => x > element);
  console.log(result.join(" "));
  process.exit();
});
