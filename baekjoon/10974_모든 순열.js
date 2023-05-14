const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = Number(input);

const answer = solution(num);
console.log(answer);

function solution(inputNum) {
  const answer = [];

  dfs([]);

  return answer.join("\n");

  function dfs(memory) {
    if (memory.length === inputNum) {
      answer.push(memory.join(" "));
      return;
    }

    for (let num = 1; num <= inputNum; num++) {
      if (memory.includes(num)) continue;

      memory.push(num);
      dfs(memory);
      memory.pop();
    }
  }
}
