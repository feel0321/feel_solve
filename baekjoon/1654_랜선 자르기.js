const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [k, n] = firstLine.split(" ").map(Number);
n = Number(n);
input = input.map(Number);

console.log(solution(input, n));

function solution(input, n) {
  let left = 1;
  let right = Math.max(...input);
  let max = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const count = input
      .map((number) => Math.floor(number / mid))
      .reduce((acc, number) => acc + number, 0);

    if (count >= n) {
      max = Math.max(max, mid);
      left = mid + 1;
      continue;
    }
    right = mid - 1;
  }
  return max;
}
/*
0 ~ 제일 작은거를 범위로 잡고
절반씩 탐색해서 개수 세면 될듯?
=>
선을 자를 수 없는 0개일때도 있음
0 ~ 제일 큰거를 범위로 잡았어야 함
*/
