/*
-면 아닐때까지 가로탐색
|면 아닐때까지 세로탐색

탐색중에 이미 탐색한곳이면 스탑

만난 문자열에 따라 탐색해야 하니까 
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
const [firstLine, ...house] = input;
const [n, m] = firstLine.split(" ").map(Number);

const initialArr = [];
initialArr.length = m;
initialArr.fill(0);

const visited = [];
let answer = 0;

for (let i = 0; i < n; i++) {
  visited.push([...initialArr]);
}

for (let i = 0; i < m; i++) {
  for (let i2 = 0; i2 < n; i2++) {
    if (!visited[i2][i]) {
      DFS(i, i2);
      answer += 1;
    }
  }
}
console.log(answer);

function DFS(x, y) {
  visited[y][x] = 1;
  const wall = house[y][x];

  if (
    wall === "|" &&
    y + 1 < n &&
    house[y + 1][x] === "|" &&
    !visited[y + 1][x]
  ) {
    DFS(x, y + 1);
  }
  if (
    wall === "-" &&
    x + 1 < m &&
    house[y][x + 1] === "-" &&
    !visited[y][x + 1]
  ) {
    DFS(x + 1, y);
  }
}
