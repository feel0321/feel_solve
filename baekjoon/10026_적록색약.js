const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input, Number(n));
console.log(answer);

function solution(input, n) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const visited2 = Array.from({ length: n }, () => Array(n).fill(false));
  let count = 0;
  let count2 = 0;
  const redGreen = ["R", "G"];

  for (let i = 0; i < n; i++) {
    for (let i2 = 0; i2 < n; i2++) {
      if (!visited[i][i2]) {
        dfs(i, i2);
        count += 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let i2 = 0; i2 < n; i2++) {
      if (!visited2[i][i2]) {
        dfs2(i, i2);
        count2 += 1;
      }
    }
  }

  function dfs(y, x) {
    visited[y][x] = true;
    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];

    for (let i = 0; i < 4; i++) {
      const nextY = dy[i] + y;
      const nextX = dx[i] + x;

      if (
        nextY >= 0 &&
        nextY < n &&
        nextX >= 0 &&
        nextX < n &&
        input[nextY][nextX] === input[y][x] &&
        !visited[nextY][nextX]
      ) {
        dfs(nextY, nextX);
      }
    }
  }

  function dfs2(y, x) {
    visited2[y][x] = true;
    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];

    for (let i = 0; i < 4; i++) {
      const nextY = dy[i] + y;
      const nextX = dx[i] + x;
      if (
        nextY < 0 ||
        nextY >= n ||
        nextX < 0 ||
        nextX >= n ||
        visited2[nextY][nextX]
      )
        continue;

      if (
        redGreen.includes(input[y][x]) &&
        redGreen.includes(input[nextY][nextX])
      )
        dfs2(nextY, nextX);
      if (
        !redGreen.includes(input[y][x]) &&
        !redGreen.includes(input[nextY][nextX])
      )
        dfs2(nextY, nextX);
    }
  }

  return `${count} ${count2}`;
}
