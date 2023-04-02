const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.split(" ").map(Number);

const answer = solution(n, m);
console.log(answer);

// 큰거만 계산한다
function solution(n, m) {
  const answer = [];
  const temp = [];

  dfs(1);

  function dfs(number) {
    if (temp.length === m) {
      answer.push(temp.join(" "));
      return;
    }

    for (let i = number; i <= n; i++) {
      temp.push(i);
      dfs(i);
      temp.pop();
    }
  }
  return answer.join("\n");
}
