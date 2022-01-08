// 한 줄 입력받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(line);
  rl.close();
}).on("close", function () {
  process.exit();
});
