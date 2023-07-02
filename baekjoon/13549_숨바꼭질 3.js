const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [start, target] = input.split(" ").map(Number);

const MAX = 100001;

const answer = solution(start, target);
console.log(answer);

function solution(start, target) {
  const distance = Array(MAX).fill(Infinity);
  const visited = Array(MAX).fill(false);

  distance[start] = 0;
  visited[start] = true;
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === target) {
      //   console.table(distance.slice(0, 20));
      return distance[target];
    }

    for (const next of [current * 2, current - 1, current + 1]) {
      if (0 <= next && next < MAX && !visited[next]) {
        visited[next] = true;
        if (next === current * 2) {
          queue.unshift(next);
          distance[next] = Math.min(distance[current], distance[next]);
        } else {
          queue.push(next);
          distance[next] = Math.min(distance[next], distance[current] + 1);
        }
      }
    }
  }
}
