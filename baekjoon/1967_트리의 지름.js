const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);

const answer = solution(input, n);
console.log(answer);

/*
weight 할당
leaf에서 시작 => leaf는 갈 수 있는 곳이 1개
*/
function solution(input, n) {
  const graph = Array.from({ length: n + 1 }, () => []);

  input.forEach((line) => {
    const [start, end, weight] = line.split(" ").map(Number);
    graph[start].push([end, weight]);
    graph[end].push([start, weight]);
  });

  return bfs(bfs(1).maxNode).max;

  function bfs(current) {
    const queue = [];
    const visited = new Set();
    let max = 0;
    let maxNode = 0;

    queue.push([current, 0]);

    while (queue.length > 0) {
      const [current, currentWeight] = queue.shift();
      if (visited.has(current)) {
        continue;
      }

      visited.add(current);
      if (currentWeight > max) {
        max = currentWeight;
        maxNode = current;
      }
      graph[current].forEach(([node, weight]) => {
        queue.push([node, currentWeight + weight]);
      });
    }

    return { max, maxNode };
  }
}
