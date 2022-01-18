const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(Number(line)));
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(num) {
  let count = 0;
  let sum = 0;
  let result = num;

  do {
    sum = parseInt(result / 10, 10) + (result % 10);
    result = (result % 10) * 10 + (sum % 10);

    count += 1;
  } while (result !== num);

  return count;
}
