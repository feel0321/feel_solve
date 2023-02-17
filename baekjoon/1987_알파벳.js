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

/*
횟수기록: Record<알파벳, number>
=> 다음 칸이 true가 아니면 간다
 */
function solution(input, y, x) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const visitedInfo = {};
  let max = 1;

  const alphabet = input[0][0];
  visitedInfo[alphabet] = true;
  dfs(0, 0, 1);

  return max;

  function dfs(currentY, currentX, count) {
    max = Math.max(count, max);

    for (let i = 0; i < 4; i++) {
      const nextY = currentY + dy[i];
      const nextX = currentX + dx[i];
      if (nextY < 0 || nextY >= y || nextX < 0 || nextX >= x) {
        continue;
      }
      const nextAlphabet = input[nextY][nextX];
      if (visitedInfo[nextAlphabet]) {
        continue;
      }
      visitedInfo[nextAlphabet] = true;
      dfs(nextY, nextX, count + 1);
      visitedInfo[nextAlphabet] = false;
    }
  }
}
