const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
for (let i = 0; i < n; i++) {
  input[i] = input[i].split(" ").map(Number);
}

solution(input, n);

function solution(input, n) {
  const visited = Array(n).fill(false);
  let min = Number.MAX_SAFE_INTEGER;

  dfs(0);
  console.log(min);

  function dfs(index) {
    if (n / 2 === visited.filter((v) => v).length) {
      let startTeamScore = 0;
      let linkTeamScore = 0;

      for (let i = 0; i < n; i++) {
        for (let i2 = 0; i2 < n; i2++) {
          // [true, true, false, false]와 [false, false, true, true]는 같은 경우이므로 계산하지 않아야 한다
          if (visited[i] && visited[i2]) {
            startTeamScore += input[i][i2];
          } else if (!visited[i] && !visited[i2]) {
            linkTeamScore += input[i][i2];
          }
        }
      }
      min = Math.min(min, Math.abs(startTeamScore - linkTeamScore));
    } else {
      for (let i = index; i < n; i++) {
        if (visited[i]) return;

        visited[i] = true;
        dfs(i + 1);
        visited[i] = false;
      }
    }
  }
}
