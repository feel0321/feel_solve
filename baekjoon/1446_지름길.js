const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [_, target] = firstLine.split(" ").map(Number);
target = Number(target);

const answer = solution(target, input);
console.log(answer);

function solution(target, input) {
  const graph = Array.from({ length: target + 1 }, () => []);
  const distances = Array.from({ length: target + 1 }, (_, i) => i);

  input.forEach((line) => {
    const [start, end, distance] = line.split(" ").map(Number);
    // end와 start의 차이와 distance가 같으면 지름길이라고 볼 수 없다
    if (end > target || end - start <= distance) return;

    graph[start].push({
      node: end,
      distance,
    });
  });

  for (let i = 0; i <= target; i++) {
    // 현재 거리와 전 거리 + 1 중 작은걸 할당
    const current = i === 0 ? 0 : distances[i - 1] + 1;
    distances[i] = Math.min(distances[i], current);

    // 현재에서 갈 수 있는 지름길이 있으면 셋팅
    graph[i].forEach(({ node, distance }) => {
      if (distances[node] > distances[i] + distance) {
        distances[node] = distances[i] + distance;
      }
    });
  }

  return distances[target];
}
