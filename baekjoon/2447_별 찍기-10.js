const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(Number(input[0])));

function solution(num) {
  const result = Array.from({ length: num }, () => Array(num).fill(" "));

  recur(num, 0, 0);

  return result.map((arr) => arr.join("")).join("\n");

  function recur(n, y, x) {
    if (n === 1) {
      result[y][x] = "*";
      return;
    }

    const point = n / 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue;

        recur(point, y + i * point, x + j * point);
      }
    }
  }
}
