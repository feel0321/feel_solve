const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
const foods = [];
input.forEach((line) => {
  foods.push(line.split(" ").map(Number));
});

const answer = solution(foods, n);
console.log(answer);

function solution(foods, n) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    recur([], i);
  }

  return answer;

  function recur(memories, idx) {
    if (memories.length) {
      answer = Math.min(answer, caculate(memories));
    }

    for (let i = idx; i < n; i++) {
      if (memories.includes(i)) continue;

      memories.push(i);
      recur(memories, i);
      memories.pop();
    }
  }

  function caculate(memories) {
    let sin = 1;
    let hot = 0;

    memories.forEach((idx) => {
      sin *= foods[idx][0];
      hot += foods[idx][1];
    });

    return Math.abs(sin - hot);
  }
}
