const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [y, x] = firstLine.split(" ").map(Number);

const answer = solution(input, y, x);
console.log(answer);

function solution(input, y, x) {
  const visited = Array.from({ length: y }, () => Array(x).fill(0));
  let count = 0;
  let size = 0;
  let max = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < y; i++) {
    input[i] = input[i].split(" ").map(Number);
  }

  for (let i = 0; i < y; i++) {
    for (let i2 = 0; i2 < x; i2++) {
      if (input[i][i2] && !visited[i][i2]) {
        dfs(i, i2);
        count += 1;
        max = Math.max(size, max);
        size = 0;
      }
    }
  }

  return `${count}\n${max}`;

  function dfs(currentY, currentX) {
    visited[currentY][currentX] = true;
    size += 1;

    for (let i = 0; i < 4; i++) {
      const nextY = dy[i] + currentY;
      const nextX = dx[i] + currentX;
      if (
        nextY >= 0 &&
        nextY < y &&
        nextX >= 0 &&
        nextX < x &&
        input[nextY][nextX] &&
        !visited[nextY][nextX]
      ) {
        dfs(nextY, nextX);
      }
    }
  }
}
