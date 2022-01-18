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
  const multiple = String(arr[0] * arr[1] * arr[2]);
  const temp = new Array(10).fill(0);
  let result = "";

  for (let i = 0; i < multiple.length; i++) temp[multiple[i]] += 1;
  for (i = 0; i < temp.length; i++) result += `${String(temp[i])}\n`;
  return result;
}
