const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(line.split(" ").map(Number));
}).on("close", function () {
  console.log(solution(inputData));
  process.exit();
});

function solution(arr) {
  const [n, scoreArr] = arr;
  const newScoreArr = [...scoreArr].sort((a, b) => b - a);
  const max = newScoreArr[0];
  let result = 0;

  const changeScoreArr = newScoreArr.map((score) => (score / max) * 100);
  for (let i = 0; i < n; i++) result += changeScoreArr[i];

  return result / n;
}
