const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const LAND = "1";
const answer = solution(input);
console.log(answer);

function solution(input) {
  let i = 0;
  const answer = [];

  while (input[i] !== "0 0") {
    const [w, h] = input[i].split(" ").map(Number);
    const count = check(input, w, h, i + 1);
    answer.push(count);
    i += h + 1;
  }

  return answer.join("\n");
}

function check(input, w, h, i) {
  const ground = input.slice(i, i + h);
  if (w === 1 && h === 1) {
    return ground[0] === LAND ? 1 : 0;
  }

  for (let y = 0; y < h; y++) {
    ground[y] = ground[y].split(" ");
  }
  let count = 0;
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (ground[y][x] === LAND && !visited[y][x]) {
        dfs(ground, visited, y, x, h, w);
        count += 1;
      }
    }
  }

  return count;
}

function dfs(ground, visited, y, x, h, w) {
  visited[y][x] = true;
  const dx = [1, 1, 0, -1, -1, -1, 0, 1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < 8; i++) {
    const nextX = dx[i] + x;
    const nextY = dy[i] + y;

    if (
      nextY >= 0 &&
      nextY < h &&
      nextX >= 0 &&
      nextX < w &&
      ground[nextY][nextX] === LAND &&
      !visited[nextY][nextX]
    ) {
      dfs(ground, visited, nextY, nextX, h, w);
    }
  }
}
