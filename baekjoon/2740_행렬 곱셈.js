const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((line) => line.split(" ").map(Number));

const [aY] = input[0];
const a = input.slice(1, aY + 1);
const b = input.slice(aY + 2);

const answer = solution(a, b);
console.log(answer);

function solution(a, b) {
  const answer = Array.from({ length: a.length }, () =>
    Array(b[0].length).fill(0)
  );

  for (let y = 0; y < a.length; y++) {
    for (let x = 0; x < a[0].length; x++) {
      for (let z = 0; z < b[0].length; z++) {
        answer[y][z] += a[y][x] * b[x][z];
      }
    }
  }

  return answer.map((line) => line.join(" ")).join("\n");
}
