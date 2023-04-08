const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, secondLine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = firstLine.split(" ").map(Number);
const numbers = secondLine.split(" ").map(Number);
numbers.sort((a, b) => a - b);

const answer = solution(numbers, n, m);
console.log(answer);

/*
숫자를 하나씩 추가한다 => m개면 그 숫자 말고 다음 숫자
중복이 안되니까 set, 오름차순 정렬
*/
function solution(numbers, n, m) {
  const set = new Set();

  for (let i = 0; i < n; i++) {
    const temp = [numbers[i]];
    dfs(i, temp);
  }

  function dfs(i, temp) {
    if (temp.length === m) {
      set.add(temp.join(" "));
      return;
    }

    for (let i2 = i; i2 < n; i2++) {
      temp.push(numbers[i2]);
      dfs(i2, temp);
      temp.pop();
    }
  }
  return [...set].join("\n");
}
