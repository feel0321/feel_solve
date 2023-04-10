const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.split(" ").map(Number);

const answer = solution(n, m);
console.log(answer);

/*
같은수 고르기 가능
*/
function solution(n, m) {
  const set = new Set();

  for (let i = 1; i <= n; i++) {
    dfs([]);
  }

  return [...set].join("\n");

  function dfs(temp) {
    if (temp.length === m) {
      set.add(temp.join(" "));
      return;
    }

    for (let i2 = 1; i2 <= n; i2++) {
      temp.push(i2);
      dfs(temp);
      temp.pop();
    }
  }
}
