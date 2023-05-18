const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, numbers] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
numbers = numbers.split(" ").map(Number);

const answer = solution(numbers, n);
console.log(answer);

function solution(numbers, n) {
  let answer = Number.MIN_SAFE_INTEGER;

  recur([]);

  return answer;

  function recur(indexes) {
    if (indexes.length === n) {
      answer = Math.max(answer, caculate(indexes, n));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!indexes.includes(i)) {
        indexes.push(i);
        recur(indexes);
        indexes.pop();
      }
    }
  }

  function caculate(indexes, n) {
    let sum = 0;

    for (let i = 0; i <= n - 2; i++) {
      sum += Math.abs(numbers[indexes[i]] - numbers[indexes[i + 1]]);
    }

    return sum;
  }
}
