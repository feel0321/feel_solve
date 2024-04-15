const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < input.length; i++) {
  const numbers = input[i].split(" ").map(Number);
  input[i] = numbers;
  max = Math.max(max, ...numbers);
}
const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

const answer = solution(input, n, max);
console.log(answer);

function solution(locationArr, n, max) {
  // i만큼 잠긴다
  // i === 0이면 아무데도 안 잠긴다   => answer 1
  // i === max면 다 잠긴다         => answer 0
  // => answer의 최소값은 1
  let answer = 1;
  for (let i = 1; i < max; i++) {
    answer = Math.max(answer, check(i, n));
  }

  return answer;

  function check(cut) {
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let i2 = 0; i2 < n; i2++) {
        if (visited[i][i2] || locationArr[i][i2] <= cut) continue;

        dfs(i, i2, visited, cut);
        count += 1;
      }
    }

    return count;
  }

  function dfs(y, x, visited, cut) {
    const n = visited.length;
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
      const nextY = dy[i] + y;
      const nextX = dx[i] + x;

      if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= n) continue;
      if (visited[nextY][nextX]) continue;
      if (locationArr[nextY][nextX] <= cut) continue;

      dfs(nextY, nextX, visited, cut);
    }
  }
}
