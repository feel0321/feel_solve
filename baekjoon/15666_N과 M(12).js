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

/*
같은 수 여러번 고르는게 가능 / 현재 숫자보다 작은 숫자를 고를 수 없음 / 중복 수열 불가능 / 오름차순
*/
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

    // 작은 숫자를 고를 수 없도록 index i부터 시작
    for (let i2 = i; i2 < n; i2++) {
      temp.push(numbers[i2]);
      dfs(i2, temp);
      temp.pop();
    }
  }
}
