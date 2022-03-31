const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, command] = fs.readFileSync(filePath).toString().trim().split("\n");
command = command.split(" ").map(Number);

console.log(solution(command));

function solution(command) {
  let answer = 0;
  const max = Math.max(...command);
  const data = Array(max + 1).fill(1);
  data[1] = 0;

  for (let i = 2; i <= max; i++) {
    if (!data[i]) continue;

    for (let i2 = i * 2; i2 <= max; i2 += i) {
      data[i2] = 0;
    }
  }
  answer += command.filter((element) => data[element]).length;

  return answer;
}
