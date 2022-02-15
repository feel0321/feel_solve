const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
const [n, m, v] = input[0].split(" ").map((element) => Number(element));
const graph = [];
const initialArr = new Array(n + 1);
initialArr.fill(0);

for (let i = 0; i <= n; i++) {
  graph.push([...initialArr]);
}

for (let i = 1; i <= m; i++) {
  const [start, end] = input[i].split(" ").map((element) => Number(element));
  graph[start][end] = 1;
  graph[end][start] = 1;
}

let visited = [];
DFS(v);
console.log(visited.join(" "));

visited = [];
BFS(v);
console.log(visited.join(" "));

function DFS(start) {
  visited.push(start);

  for (let i = 1; i <= n; i++) {
    if (graph[start][i] && !visited.includes(i)) {
      DFS(i);
    }
  }
}

function BFS(start) {
  const queue = [start];
  visited.push(start);

  while (queue.length) {
    const next = queue.shift();

    for (let i = 1; i <= n; i++) {
      if (graph[next][i] && !visited.includes(i)) {
        queue.push(i);
        visited.push(i);
      }
    }
  }
}
