const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((line) => line.split(""));

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

const answer = solution(input, Number(n));
console.log(answer);

// 변경 코드
// dfs() 돌고, 적색("R")을 녹색("G")로 바꾸고 dfs()를 추가로 돈다
function solution(input, n) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const visited2 = Array.from({ length: n }, () => Array(n).fill(false));
  let count = 0;
  let count2 = 0;

  for (let i = 0; i < n; i++) {
    for (let i2 = 0; i2 < n; i2++) {
      if (!visited[i][i2]) {
        dfs(input, visited, i, i2);
        count += 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let i2 = 0; i2 < n; i2++) {
      if (input[i][i2] === "R") {
        input[i][i2] = "G";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let i2 = 0; i2 < n; i2++) {
      if (!visited2[i][i2]) {
        dfs(input, visited2, i, i2);
        count2 += 1;
      }
    }
  }

  return `${count} ${count2}`;
}

function dfs(input, visited, y, x) {
  visited[y][x] = true;

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
      dfs(input, visited, nextY, nextX);
    }
  }
}

// 기존 코드
// dfs() 한번 돌고, 적녹을 하나로 보는 dfs2() 함수를 추가로 돈다
// function solution(input, n) {
//   const visited = Array.from({ length: n }, () => Array(n).fill(false));
//   const visited2 = Array.from({ length: n }, () => Array(n).fill(false));
//   let count = 0;
//   let count2 = 0;
//   const redGreen = ["R", "G"];

//   for (let i = 0; i < n; i++) {
//     for (let i2 = 0; i2 < n; i2++) {
//       if (!visited[i][i2]) {
//         dfs(i, i2);
//         count += 1;
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let i2 = 0; i2 < n; i2++) {
//       if (!visited2[i][i2]) {
//         dfs2(i, i2);
//         count2 += 1;
//       }
//     }
//   }

//   function dfs(y, x) {
//     visited[y][x] = true;
//     const dy = [0, 1, 0, -1];
//     const dx = [1, 0, -1, 0];

//     for (let i = 0; i < 4; i++) {
//       const nextY = dy[i] + y;
//       const nextX = dx[i] + x;

//       if (
//         nextY >= 0 &&
//         nextY < n &&
//         nextX >= 0 &&
//         nextX < n &&
//         input[nextY][nextX] === input[y][x] &&
//         !visited[nextY][nextX]
//       ) {
//         dfs(nextY, nextX);
//       }
//     }
//   }

//   function dfs2(y, x) {
//     visited2[y][x] = true;
//     const dy = [0, 1, 0, -1];
//     const dx = [1, 0, -1, 0];

//     for (let i = 0; i < 4; i++) {
//       const nextY = dy[i] + y;
//       const nextX = dx[i] + x;
//       if (
//         nextY < 0 ||
//         nextY >= n ||
//         nextX < 0 ||
//         nextX >= n ||
//         visited2[nextY][nextX]
//       )
//         continue;

//       if (
//         redGreen.includes(input[y][x]) &&
//         redGreen.includes(input[nextY][nextX])
//       )
//         dfs2(nextY, nextX);
//       if (
//         !redGreen.includes(input[y][x]) &&
//         !redGreen.includes(input[nextY][nextX])
//       )
//         dfs2(nextY, nextX);
//     }
//   }

//   return `${count} ${count2}`;
// }
