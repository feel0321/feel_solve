const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [y, x] = firstLine.split(" ");
const graph = [];
input.forEach((line) => {
  graph.push(line.split("").map(Number));
});

const answer = solution(graph, y, x);
console.log(answer);

function solution(graph, y, x) {
  const queue = [[0, 0]];
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  while (queue.length > 0) {
    const [currY, currX] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextY = currY + dy[i];
      const nextX = currX + dx[i];
      if (
        0 <= nextY &&
        nextY < y &&
        0 <= nextX &&
        nextX < x &&
        graph[nextY][nextX] === 1
      ) {
        queue.push([nextY, nextX]);
        graph[nextY][nextX] = graph[currY][currX] + 1;
      }
    }
  }

  return graph[y - 1][x - 1];
}
