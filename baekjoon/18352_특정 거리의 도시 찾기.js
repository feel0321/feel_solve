const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [city, road, minDistance, startCity] = firstLine.split(" ").map(Number);
const distanceMemory = Array.from({ length: city + 1 }, () => []);
input.forEach((line) => {
  const [start, end] = line.split(" ").map(Number);
  distanceMemory[start].push(end);
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
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  pop() {
    const node = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return node.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const answer = solution(distanceMemory, city, startCity, minDistance);
console.log(answer);

function solution(distanceMemory, city, startCity, minDistance) {
  const distances = Array(city + 1).fill(Infinity);
  const visited = Array(city + 1).fill(false);

  distances[startCity] = 0;
  const queue = new Queue();
  queue.push(startCity);
  while (!queue.isEmpty()) {
    const nextCity = queue.pop();
    distanceMemory[nextCity].forEach((i) => {
      if (visited[i]) return;

      distances[i] = Math.min(distances[i], distances[nextCity] + 1);
      queue.push(i);
    });
    visited[nextCity] = true;
  }

  const answer = [];
  distances.forEach((distance, i) => {
    if (distance === minDistance) {
      answer.push(i);
    }
  });
  return answer.length > 0 ? answer.join("\n") : -1;
}
