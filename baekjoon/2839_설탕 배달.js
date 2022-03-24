const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(Number(input)));

function solution(data) {
  const arr = Array(5).fill(5001);
  arr[2] = 1;
  arr[4] = 1;
  for (let i = 5; i < data; i++) {
    const before = Math.min(arr[i - 3], arr[i - 5]);
    arr[i] = before > 5000 ? before : before + 1;
  }
  return arr[data - 1] > 5000 ? -1 : arr[data - 1];
}
/*
0 0
1 0
2 0
3 1
4 0
5 1
6 2
7 0
8 2
*/
