const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

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

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [x, y] = firstLine.split(" ").map(Number);
const tomatoMap = [];
const queue = new Queue();

input.forEach((line, y) => {
  const tomatoes = line.split(" ").map(Number);
  tomatoMap.push(tomatoes);
  tomatoes.forEach((tomato, x) => {
    if (tomato === 1) {
      queue.push([y, x, 1]);
    }
  });
});

const answer = solution(tomatoMap, queue);
console.log(answer);

function solution(tomatoMap, queue) {
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (queue.size() > 0) {
    const [currY, currX, count] = queue.pop();
    answer = Math.max(answer, count);

    for (let i = 0; i < 4; i++) {
      const nextY = currY + dy[i];
      const nextX = currX + dx[i];

      if (
        0 <= nextY &&
        nextY < y &&
        0 <= nextX &&
        nextX < x &&
        tomatoMap[nextY][nextX] === 0
      ) {
        const nextCount = count + 1;
        tomatoMap[nextY][nextX] = nextCount;
        queue.push([nextY, nextX, nextCount]);
      }
    }
  }

  return tomatoMap.some((tomatoes) => tomatoes.some((tomato) => tomato === 0))
    ? -1
    : answer - 1;
}
