/*
0, 0에서 값만큼 오른쪽 or 아래 이동 되는지?
이동 되면 이동

n - 1, n - 1 도착할수 있는지?
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
let [n, ...gameMap] = input;
n = Number(n);
gameMap = gameMap.map((element) =>
  element.split(" ").map((element2) => Number(element2))
);

let visited = [];
const dy = [1, 0];
const dx = [0, 1];

DFS(gameMap, 0, 0);
console.log("DFS 후");
console.log(visited);
if (visited.includes(`${n - 1} ${n - 1}`)) {
  console.log("HaruHaru");
} else {
  console.log("Hing");
}

visited = [];
BFS(gameMap, 0, 0);
console.log("BFS 후");
console.log(visited);
if (visited.includes(`${n - 1} ${n - 1}`)) {
  console.log("HaruHaru");
} else {
  console.log("Hing");
}

function DFS(gameMap, x, y) {
  visited.push(`${y} ${x}`);
  const val = gameMap[y][x];

  for (let i = 0; i < 2; i++) {
    const nextY = y + dy[i] * val;
    const nextX = x + dx[i] * val;
    if (nextY < n && nextX < n && !visited.includes(`${nextY} ${nextX}`)) {
      DFS(gameMap, nextX, nextY);
    }
  }
}

function BFS(gameMap, x, y) {
  const queue = [y, x];
  visited.push(`${y} ${x}`);

  while (queue.length) {
    const newY = queue.shift();
    const newX = queue.shift();
    const val = gameMap[newY][newX];
    for (let i = 0; i < 2; i++) {
      const nextY = newY + dy[i] * val;
      const nextX = newX + dx[i] * val;
      if (nextY < n && nextX < n && !visited.includes(`${nextY} ${nextX}`)) {
        queue.push(nextY);
        queue.push(nextX);
        visited.push(`${nextY} ${nextX}`);
      }
    }
  }
}
