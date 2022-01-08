// 여러 줄 입력받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  console.log(inputData);
  process.exit();
});
