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
  let result = "";

  for (let i = 1; i < arr.length; i++) {
    const [count, ...score] = arr[i];
    const average = score.reduce((result, scoreOne) => {
      result += scoreOne;
      return result;
    }, 0);
    const passScore = average / count;
    const passScoreCount = score.filter(
      (scoreOne) => scoreOne > passScore
    ).length;
    result += `${((passScoreCount / count) * 100).toFixed(3)}%\n`;
  }
  return result;
}
