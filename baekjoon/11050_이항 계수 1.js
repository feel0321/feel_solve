const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input.split(" ").map(Number);

console.log(solution(n, k));

function solution(n, k) {
  const info = Array.from(Array(n + 1), (_, idx) => Array(idx + 1).fill(1));

  for (let i = 2; i < info.length; i++) {
    for (let i2 = 1; i2 < info[i].length - 1; i2++) {
      info[i][i2] = info[i - 1][i2] + info[i - 1][i2 - 1];
    }
  }
  return info[n][k];
}

/*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/
