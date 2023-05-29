const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [cityCount, busCount, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
cityCount = Number(cityCount);
busCount = Number(busCount);
const graph = Array.from({ length: cityCount + 1 }, () => []);

input.forEach((line, i) => {
  if (i === busCount) return;

  const [start, end, weight] = line.split(" ").map(Number);
  graph[start].push({
    node: end,
    weight,
  });
});
const [start, end] = input[busCount].split(" ").map(Number);

const answer = solution(graph, start, end, cityCount);
console.log(answer);

function solution(graph, start, end, cityCount) {
  const distances = Array(cityCount + 1).fill(Infinity);
  const visited = Array(cityCount + 1).fill(false);

  // start 처리
  distances[start] = 0;
  graph[start].forEach(({ node, weight }) => {
    distances[node] = Math.min(distances[start] + weight, distances[node]);
  });

  // 갈 수 있는 가장 작은 index를 찾아 처리
  for (let i = 1; i <= cityCount; i++) {
    const idx = getSmallestIndex(distances, visited);
    // 갈 수 있는 node가 없음 => break
    if (idx === -1) break;

    graph[idx].forEach(({ node, weight }) => {
      distances[node] = Math.min(distances[idx] + weight, distances[node]);
    });
    visited[idx] = true;
  }
  return distances[end];
}

function getSmallestIndex(distances, visited) {
  let minValue = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;

  for (let i = 1; i < distances.length; i++) {
    if (visited[i]) continue;

    const distance = distances[i];
    if (distance < minValue) {
      minIdx = i;
      minValue = distance;
    }
  }
  return minIdx;
}
