const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = firstLine.split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
input.forEach((line) => {
  const [start, end] = line.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

const answer = solution(graph, n);
console.log(answer);

function solution(graph, n) {
  const visited = Array(n + 1).fill(false);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    recur(i);
    count += 1;
  }

  return count;

  function recur(idx) {
    if (visited[idx]) return;

    visited[idx] = true;
    for (const next of graph[idx]) {
      recur(next);
    }
  }
}
