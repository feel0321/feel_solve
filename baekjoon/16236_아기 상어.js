const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

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
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
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

const answer = solution(input, n);
console.log(answer);

function solution(input, n) {
  // [y][x] 인 칸은 아기 상어
  // 아기상어 칸을 제외하고 먹을 수 있는 물고기가 몇개인지 판단

  n = Number(n);
  let level = 2;
  let exp = 0;
  let y = null;
  let x = null;
  let distance = 0;
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  const dy = [-1, 0, 1, 0];
  const dx = [0, -1, 0, 1];

  input.forEach((line, i) => {
    input[i] = line.split(" ").map(Number);

    const index9 = input[i].indexOf(9);
    if (index9 > -1) {
      y = i;
      x = index9;
    }
  });

  let fishes = bfs(y, x);

  return test();

  function bfs(startY, startX) {
    const queue = new Queue();
    let tempFishes = [];
    let minDistance = Number.MAX_SAFE_INTEGER;

    queue.push([startY, startX, 0]);
    visited[startY][startX] = true;

    while (queue.size() > 0) {
      const [currentY, currentX, currentDistance] = queue.pop();

      for (let i = 0; i < 4; i++) {
        const nextY = dy[i] + currentY;
        const nextX = dx[i] + currentX;

        if (
          0 <= nextY &&
          nextY < n &&
          0 <= nextX &&
          nextX < n &&
          input[nextY][nextX] <= level &&
          !visited[nextY][nextX]
        ) {
          const tempDistance = currentDistance + 1;
          queue.push([nextY, nextX, tempDistance]);
          visited[nextY][nextX] = true;

          if (input[nextY][nextX] > 0 && input[nextY][nextX] < level) {
            if (minDistance > tempDistance) {
              tempFishes = [];
              minDistance = tempDistance;
            }
            if (minDistance === tempDistance) {
              tempFishes.push([nextY, nextX, minDistance]);
            }
          }
        }
      }
    }

    tempFishes.sort(([_, aX], [__, bX]) => aX - bX);
    tempFishes.sort(([aY, _], [bY, __]) => aY - bY);
    return tempFishes;
  }

  function test() {
    while (fishes.length > 0) {
      const [currentY, currentX, currentDistance] = fishes.shift();
      input[y][x] = 0;

      distance += currentDistance;
      y = currentY;
      x = currentX;
      exp += 1;
      if (exp === level) {
        level += 1;
        exp = 0;
      }

      visited = Array.from({ length: n }, () => Array(n).fill(false));
      fishes = bfs(y, x);
    }

    return distance;
  }
}
