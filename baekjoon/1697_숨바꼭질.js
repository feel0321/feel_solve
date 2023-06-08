const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [start, target] = input.split(" ").map(Number);

const MAX = 100000 + 1;

const answer = solution(start, target);
console.log(answer);

function solution(start, target) {
  const distance = Array(MAX).fill(Infinity);
  const visited = Array(MAX).fill(false);

  distance[start] = 0;
  const queue = [start];
  while (queue.length) {
    const current = queue.shift();
    if (current === target) return distance[target];

    for (const next of [current - 1, current + 1, current * 2]) {
      if (0 <= next && next <= MAX && !visited[next]) {
        distance[next] = Math.min(distance[next], distance[current] + 1);
        queue.push(next);
        visited[next] = true;
      }
    }
  }
}
