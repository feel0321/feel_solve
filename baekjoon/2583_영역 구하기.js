const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [yLength, xLength] = firstLine.split(" ").map(Number);

const dfsAnswer = solution(yLength, xLength, input);
console.log("dfs");
console.log(dfsAnswer);
const bfsAnswer = solution2(yLength, xLength, input);
console.log("bfs");
console.log(bfsAnswer);

function solution(yLength, xLength, input) {
  const [ground, visited] = setGround(input);
  const answer = [];
  let count = 0;

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      if (!visited[y][x] && !ground[y][x]) {
        dfs(y, x);
        answer.push(count);
        count = 0;
      }
    }
  }

  function dfs(y, x) {
    visited[y][x] = true;
    count += 1;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      const nextY = dy[i] + y;
      const nextX = dx[i] + x;
      if (
        nextY >= 0 &&
        nextY < yLength &&
        nextX >= 0 &&
        nextX < xLength &&
        !ground[nextY][nextX] &&
        !visited[nextY][nextX]
      ) {
        dfs(nextY, nextX);
      }
    }
  }

  return `${answer.length}\n${answer.sort((a, b) => a - b).join(" ")}`;
}

function solution2(yLength, xLength, input) {
  const [ground, visited] = setGround(input);
  const answer = [];

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      if (!visited[y][x] && !ground[y][x]) {
        const count = bfs(y, x);
        answer.push(count);
      }
    }
  }

  function bfs(y, x) {
    const queue = [];
    queue.push([y, x]);
    visited[y][x] = true;
    let count = 1;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];

    while (queue.length) {
      const [currentY, currentX] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextY = dy[i] + currentY;
        const nextX = dx[i] + currentX;

        if (
          nextY >= 0 &&
          nextY < yLength &&
          nextX >= 0 &&
          nextX < xLength &&
          !ground[nextY][nextX] &&
          !visited[nextY][nextX]
        ) {
          queue.push([nextY, nextX]);
          visited[nextY][nextX] = true;
          count += 1;
        }
      }
    }

    return count;
  }

  return `${answer.length}\n${answer.sort((a, b) => a - b).join(" ")}`;
}

function setGround(input) {
  const ground = Array.from({ length: yLength }, () =>
    Array(xLength).fill(false)
  );
  const visited = Array.from({ length: yLength }, () =>
    Array(xLength).fill(false)
  );

  input.forEach((line) => {
    const [leftDownX, leftDownY, rightUpX, rightUpY] = line
      .split(" ")
      .map(Number);
    for (let y = leftDownY; y < rightUpY; y++) {
      for (let x = leftDownX; x < rightUpX; x++) {
        ground[y][x] = true;
      }
    }
    // console.table(ground);
  });

  return [ground, visited];
}
