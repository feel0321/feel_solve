const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input, numbers] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.split(" ").map(Number);
numbers = numbers
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = solution(n, m, numbers);
console.log(answer);

// 큰거만 계산한다
function solution(n, m, numbers) {
  const answer = [];
  const temp = [];

  dfs();

  function dfs() {
    if (temp.length === m) {
      answer.push(temp.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (temp.includes(numbers[i])) {
        continue;
      }
      temp.push(numbers[i]);
      dfs();
      temp.pop();
    }
  }
  return answer.join("\n");
}
