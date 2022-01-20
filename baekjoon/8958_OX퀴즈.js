const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputData = [];
rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  console.log(solution(inputData));
  process.exit();
});

function solution(arr) {
  let result = "";

  for (let i = 1; i < arr.length; i++) {
    let score = 0;
    let tempScore = 0;
    for (let i2 = 0; i2 < Number(arr[i].length); i2++) {
      if (arr[i][i2] === "X") {
        score = 0;
        continue;
      }
      score += 1;
      tempScore += score;
    }
    result += `${String(tempScore)}\n`;
  }
  return result;
}
