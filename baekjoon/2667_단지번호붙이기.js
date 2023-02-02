const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...ground] = fs.readFileSync(filePath).toString().trim().split("\n");
/*
    0,0부터 돌면서 0이 아닌 값이면 주변 탐색
*/
const visited = Array.from({ length: n }, () => Array(n).fill(false));
const ZERO = "0";

console.log(solution(ground, visited));

// function solution(ground, visited) {
//   const n = ground.length;
//   const answer = [];
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     for (let i2 = 0; i2 < n; i2++) {
//       if (ground[i][i2] !== ZERO && !visited[i][i2]) {
//         dfs(i, i2);
//         answer.push(count);
//         count = 0;
//       }
//     }
//   }

//   function dfs(y, x) {
//     visited[y][x] = true;
//     count += 1;
//     const dy = [0, 1, 0, -1];
//     const dx = [1, 0, -1, 0];

//     for (let i = 0; i < 4; i++) {
//       const nextY = y + dy[i];
//       const nextX = x + dx[i];
//       if (
//         nextY >= 0 &&
//         nextY < n &&
//         nextX >= 0 &&
//         nextX < n &&
//         ground[nextY][nextX] !== ZERO &&
//         !visited[nextY][nextX]
//       ) {
//         dfs(nextY, nextX);
//       }
//     }
//   }

//   answer.sort((a, b) => a - b);
//   return `${answer.length}\n${answer.join("\n")}`;
// }

function solution(ground, visited) {
  const n = ground.length;
  const answer = [];

  for (let i = 0; i < n; i++) {
    for (let i2 = 0; i2 < n; i2++) {
      if (ground[i][i2] !== ZERO && !visited[i][i2]) {
        answer.push(bfs(i, i2));
      }
    }
  }

  function bfs(y, x) {
    const queue = [];
    queue.push([y, x]);
    visited[y][x] = true;
    let count = 0;

    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];

    while (queue.length) {
      const [currentY, currentX] = queue.shift();
      count += 1;

      for (let i = 0; i < 4; i++) {
        const nextY = currentY + dy[i];
        const nextX = currentX + dx[i];
        if (
          nextY >= 0 &&
          nextY < n &&
          nextX >= 0 &&
          nextX < n &&
          ground[nextY][nextX] !== ZERO &&
          !visited[nextY][nextX]
        ) {
          visited[nextY][nextX] = true;
          queue.push([nextY, nextX]);
        }
      }
    }
    return count;
  }

  answer.sort((a, b) => a - b);
  return `${answer.length}\n${answer.join("\n")}`;
}
