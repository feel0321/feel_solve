const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const size = Number(input[0]);
const answer = solution(size, input[1].split(" ").map(Number));
console.log(answer);

function solution(size, [r1, c1, r2, c2]) {
  // shift가 아니라 next때 판단하게 되면서 early return 필요
  if (r1 === r2 && c1 === c2) return 0;

  const directionR = [-2, -2, 0, 0, 2, 2];
  const directionC = [-1, 1, -2, 2, -1, 1];
  const visited = Array.from({ length: size }, () => Array(size).fill(false));
  const queue = [[r1, c1, 0]];
  visited[r1][c1] = true;

  let count = 0;

  while (queue.length > 0) {
    count += 1;
    let loopCount = queue.length;

    for (let l = 0; l < loopCount; l++) {
      const [currentR, currentC] = queue.shift();
      //   3중 for문처럼 보이지만 빅오가 상수값이다
      for (let i = 0; i < 6; i++) {
        const nextR = currentR + directionR[i];
        if (0 > nextR || nextR >= size) continue;

        const nextC = currentC + directionC[i];
        if (0 > nextC || nextC >= size) continue;

        if (visited[nextR][nextC]) continue;

        // shift할 때가 아니라 next를 판단한 시점에 탈출하는게 빠르다
        // shift할 때 판단하면 next를 판단한 이후에도 계산이 더 필요하다
        if (nextR === r2 && nextC === c2) return count;

        visited[nextR][nextC] = true;
        queue.push([nextR, nextC]);
      }
    }
  }

  return -1;
}
