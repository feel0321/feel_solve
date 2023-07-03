const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [y, x] = firstLine.split(" ").map(Number);
const graph = [];
let startY = null;
let startX = null;

const START = "I";
const BLOCK = "X";
const TARGET = "P";
const NO_SEARCH = "TT";

input.forEach((line, y2) => {
  const arr = line.split("");
  const x2 = arr.findIndex((str) => str === START);
  if (x2 > -1) {
    startY = y2;
    startX = x2;
  }
  graph.push(line.split(""));
});

const answer = solution(graph, startY, startX);
console.log(answer);

function solution(graph, startY, startX) {
  let targetCount = 0;
  const visited = Array.from({ length: y }, () => Array(x).fill(false));
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  dfs(startY, startX);

  return targetCount > 0 ? targetCount : NO_SEARCH;

  function dfs(currentY, currentX) {
    visited[currentY][currentX] = true;
    if (graph[currentY][currentX] === TARGET) {
      targetCount += 1;
    }

    for (let i = 0; i < 4; i++) {
      const nextY = currentY + dy[i];
      const nextX = currentX + dx[i];

      if (
        nextY < 0 ||
        nextY >= y ||
        nextX < 0 ||
        nextX >= x ||
        graph[nextY][nextX] === BLOCK ||
        visited[nextY][nextX]
      )
        continue;

      dfs(nextY, nextX);
    }
  }
}
