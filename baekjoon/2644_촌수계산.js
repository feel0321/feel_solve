const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, first, m, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = Number(n);
const [start, end] = first.split(" ").map(Number);
m = Number(m);
const answer = solutionDFS(input, start, end, n);
console.log(answer);
const answerBFS = solutionBFS(input, start, end, n);
console.log(answerBFS);

function solutionDFS(input, start, end, n) {
  const ground = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  const visited = Array(n + 1).fill(false);
  let answer = -1;

  input.forEach((line) => {
    const [man1, man2] = line.split(" ").map(Number);
    ground[man1][man2] = true;
    ground[man2][man1] = true;
  });
  dfs(start, 0);
  return answer;

  function dfs(current, count) {
    if (current === end) {
      answer = count;
      return;
    }

    visited[current] = true;

    for (let i = 1; i <= n; i++) {
      if (ground[current][i] && !visited[i]) {
        dfs(i, count + 1);
      }
    }
  }
}

function solutionBFS(input, start, end, n) {
  const [ground, visited] = setGround(n, input);

  return bfs(start, end);

  function bfs(start, end) {
    const queue = [];
    queue.push([start, 0]);
    visited[start] = true;

    while (queue.length) {
      const [current, count] = queue.shift();
      if (current === end) {
        return count;
      }

      for (let i = 1; i <= n; i++) {
        if (ground[current][i] && !visited[i]) {
          queue.push([i, count + 1]);
          visited[i] = true;
        }
      }
    }

    return -1;
  }
}

function setGround(n, input) {
  const ground = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  const visited = Array(n + 1).fill(false);

  input.forEach((line) => {
    const [man1, man2] = line.split(" ").map(Number);
    ground[man1][man2] = true;
    ground[man2][man1] = true;
  });

  return [ground, visited];
}
