const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, l, r, x] = input[0].split(" ").map(Number);
const scores = input[1].split(" ").map(Number);

const answer = solution(scores);
console.log(answer);

function solution(scores) {
  let answer = 0;
  recur([], 0);

  return answer;

  function recur(indexes, idx) {
    if (indexes.length >= 2 && canUse(indexes)) {
      answer += 1;
    }

    for (let i = idx; i < n; i++) {
      if (!indexes.includes(i)) {
        indexes.push(i);
        recur(indexes, i + 1);
        indexes.pop();
      }
    }
  }

  // 난이도의 합은 L보다 크거나 같고, R보다 작거나 같다
  // 가장 어려운 문제와 가장 쉬운 문제의 난이도 차이는 X보다 크거나 같아야 한다
  function canUse(indexes) {
    const currentScores = indexes.map((i) => scores[i]);
    const sum = currentScores.reduce((acc, score) => (acc += score), 0);
    if (sum < l || sum > r) return false;

    const diff = Math.max(...currentScores) - Math.min(...currentScores);
    return diff >= x;
  }
}
