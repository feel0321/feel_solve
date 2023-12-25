const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input);

const answer = solution(input);
console.log(answer);

function solution(n) {
  const visited = [];
  const START = 1;
  const RIGHT = 3;

  recurHanoi(n, START, RIGHT);

  return `${visited.length}\n${visited.join("\n")}`;

  function recurHanoi(num, start, end) {
    // 1개를 옮기는 경우는 옮기고 끝
    if (num === 1) {
      visited.push(`${start} ${end}`);
    } else {
      const temp = 6 - start - end;
      // 1. 맨 아래 1개를 제외한 n-1개를 목적지가 아닌 곳으로 옮기고
      recurHanoi(num - 1, start, temp);
      // 2. 맨 아래 1개를 목적지로 옮기고
      visited.push(`${start} ${end}`);
      // 3. 1에서 옮긴 n-1개를 목적지로 옮긴다
      recurHanoi(num - 1, temp, end);
    }
  }
}
