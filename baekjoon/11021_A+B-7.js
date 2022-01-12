// 여러 줄 입력받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let caseCount = 1;
rl.on("line", function (line) {
  const inputLine = line.split(" ");
  if (inputLine.length > 1) {
    const [num1, num2] = inputLine.map((element) => Number(element));
    console.log(`Case #${caseCount++}: ${num1 + num2}`);
  }
}).on("close", function () {
  process.exit();
});
