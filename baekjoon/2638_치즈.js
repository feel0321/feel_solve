const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [y, x] = firstLine.split(" ").map(Number);
input.forEach((line, i) => {
  input[i] = line.split(" ").map(Number);
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    const value = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return value;
  }

  size() {
    return this.length;
  }
}

const answer = solution(input, y, x);
console.log(answer);

/*
1번 탐색 => 공기 판단
  공기랑 2번 이상 닿은 치즈를 녹인다
    치즈가 있다면 반복한다
*/
function solution(input, y, x) {
  const visited = Array.from({ length: y }, () => Array(x).fill(false));
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const CHEESE = 1;
  const AIR = 2;

  let answer = 0;

  while (true) {
    bfs();
    const notCheese = input.every((line) => {
      return line.every((value) => value !== CHEESE);
    });
    if (notCheese) {
      break;
    }

    dry();
    answer += 1;
    visited.forEach((line, i) => {
      line.forEach((_, i2) => {
        visited[i][i2] = false;
      });
    });
  }

  return answer;

  function bfs() {
    const queue = new Queue();
    queue.push([0, 0]);
    visited[0][0] = true;

    while (queue.size()) {
      const [currentY, currentX] = queue.pop();
      input[currentY][currentX] = AIR;

      for (let i = 0; i < 4; i++) {
        const nextY = currentY + dy[i];
        const nextX = currentX + dx[i];

        if (nextY < 0 || y <= nextY || nextX < 0 || x <= nextX) {
          continue;
        }

        if (!visited[nextY][nextX] && input[nextY][nextX] !== CHEESE) {
          visited[nextY][nextX] = true;
          queue.push([nextY, nextX]);
        }
      }
    }
  }

  function dry() {
    const arr = [];

    input.forEach((line, i) => {
      line.forEach((value, i2) => {
        if (input[i][i2] === CHEESE) {
          let count = 0;

          for (let i3 = 0; i3 < 4; i3++) {
            const nextY = i + dy[i3];
            const nextX = i2 + dx[i3];
            if (nextY < 0 || y <= nextY || nextX < 0 || x <= nextX) continue;

            if (input[nextY][nextX] === AIR) {
              count += 1;
              if (count === 2) {
                arr.push([i, i2]);
              }
            }
          }
        }
      });
    });

    arr.forEach(([i, i2]) => {
      input[i][i2] = AIR;
    });
  }
}
