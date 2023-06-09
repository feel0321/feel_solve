const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = firstLine.split(" ").map(Number);
const target = 2;
const graph = [];
let y = 0;
let x = 0;
input.forEach((line, i) => {
  const arr = line.split(" ").map(Number);
  const numbers = [];
  for (const num of arr) {
    if (num === 1) {
      numbers.push(Infinity);
    } else {
      numbers.push(0);
    }
  }
  graph.push(numbers);

  const targetIdx = arr.findIndex((num) => num === target);
  if (targetIdx > -1) {
    y = i;
    x = targetIdx;
  }
});

const answer = solution(graph, y, x);
console.log(answer);

function solution(graph, y, x) {
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const queue = [[y, x]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[y][x] = true;

  while (queue.length) {
    const [currY, currX] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextY = currY + dy[i];
      const nextX = currX + dx[i];

      if (
        0 <= nextY &&
        nextY < n &&
        0 <= nextX &&
        nextX < m &&
        graph[nextY][nextX] &&
        !visited[nextY][nextX]
      ) {
        visited[nextY][nextX] = true;
        graph[nextY][nextX] = graph[currY][currX] + 1;
        queue.push([nextY, nextX]);
      }
    }
  }

  const answer = [];
  graph.forEach((arr) => {
    arr.forEach((number, x) => {
      if (number === Infinity) {
        arr[x] = -1;
      }
    });
    answer.push(arr.join(" "));
  });
  //   console.table(graph);
  return answer.join("\n");
}
