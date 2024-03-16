const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const size = Number(input[0]);
const answer = solution(size, input[1].split(" ").map(Number));
console.log(answer);

function solution(size, [r1, c1, r2, c2]) {
  const directionR = [-2, -2, 0, 0, 2, 2];
  const directionC = [-1, 1, -2, 2, -1, 1];
  const visited = Array.from({ length: size }, () => Array(size).fill(false));
  const queue = [[r1, c1, 0]];
  visited[r1][c1] = true;

  while (queue.length > 0) {
    const [currentR, currentC, currentCount] = queue.shift();
    if (currentR === r2 && currentC === c2) return currentCount;

    for (let i = 0; i < 6; i++) {
      const nextR = currentR + directionR[i];
      if (0 > nextR || nextR >= size) continue;

      const nextC = currentC + directionC[i];
      if (0 > nextC || nextC >= size) continue;

      if (visited[nextR][nextC]) continue;

      visited[nextR][nextC] = true;
      queue.push([nextR, nextC, currentCount + 1]);
    }
  }

  return -1;
}
