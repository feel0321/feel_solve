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
  const ground = Array.from({ length: y + 1 }, () => Array(x + 1).fill(false));
  const visited = Array.from({ length: y + 1 }, () => Array(x + 1).fill(false));
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  let count = 0;
  let max = 0;

  for (const line of input) {
    const [inputY, inputX] = line.split(" ").map(Number);
    ground[inputY][inputX] = true;
  }

  for (let i = 1; i <= y; i++) {
    for (let i2 = 1; i2 <= x; i2++) {
      if (ground[i][i2] && !visited[i][i2]) {
        dfs(i, i2);
        max = Math.max(max, count);
        count = 0;
      }
    }
  }

  return max;

  function dfs(currentY, currentX) {
    count += 1;
    visited[currentY][currentX] = true;

    for (let i = 0; i < 4; i++) {
      const nextY = dy[i] + currentY;
      const nextX = dx[i] + currentX;

      if (
        nextY > 0 &&
        nextY <= y &&
        nextX > 0 &&
        nextX <= x &&
        ground[nextY][nextX] &&
        !visited[nextY][nextX]
      ) {
        dfs(nextY, nextX);
      }
    }
  }
}
