// 여러 줄 입력받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(Number(line));
}).on("close", function () {
  console.log(solution(inputData));
  process.exit();
});

function solution(arr) {
  const result = new Array(42).fill(0);

  for (let i = 0; i < 10; i++) result[arr[i] % 42] += 1;
  return result.filter((element) => element).length;
}
