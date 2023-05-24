const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
const costs = [];
input.forEach((line) => {
  const cost = line.split(" ").map(Number);
  costs.push(cost);
});

const answer = solution(costs, n);
console.log(answer);

function solution(costs, n) {
  for (let i = 1; i < n; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }
  return Math.min(...costs[n - 1]);
}
