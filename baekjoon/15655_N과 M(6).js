const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, secondLine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = firstLine.split(" ").map(Number);
const numbers = secondLine
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = solution(numbers, n, m);
console.log(answer);

function solution(numbers, n, m) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    dfs(i, []);
  }

  return [...set].join("\n");

  function dfs(i, temp) {
    if (temp.length === m) {
      set.add(temp.join(" "));
      return;
    }

    for (let i2 = i; i2 < n; i2++) {
      const number = numbers[i2];
      if (temp.includes(number)) continue;

      temp.push(number);
      dfs(i2, temp);
      temp.pop();
    }
  }
}
