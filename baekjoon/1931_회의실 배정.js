const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const times = [];
input.forEach((line) => {
  times.push(line.split(" ").map(Number));
});

const answer = solution(times);
console.log(answer);

function solution(times) {
  let lastTime = -1;
  let count = 0;

  times
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1])
    .forEach(([start, end]) => {
      if (start >= lastTime && end >= lastTime) {
        lastTime = end;
        count += 1;
      }
    });

  return count;
}
