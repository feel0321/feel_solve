const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, bridge, goal] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
bridge = bridge.split(" ").map(Number);
let [start, end] = goal.split(" ").map(Number);

console.log(solution(start, end));

function solution(start, end) {
  const record = Array(n + 1).fill(0);
  record[start] = 1;
  const q = [[start, 1]];

  while (q.length) {
    const [node, count] = q.shift();
    let i = node % bridge[node - 1];
    // i = 0일 때, index 0을 사용하지 않으니까 이렇게 처리
    if (!i) i += bridge[node - 1];

    while (i <= n) {
      check(record, q, i, count);
      if (record[end]) {
        // 성공시
        // console.log(record);
        return record[end] - 1;
      }
      i += bridge[node - 1];
    }
  }
  // 실패시
  // console.log(record);
  return -1;
}

function check(record, q, i, count) {
  if (!record[i]) {
    record[i] = count + 1;
    q.push([i, count + 1]);
  }
}

/*
최소 몇번의 점프로 도착지에 갈 수 있는가? => BFS로 count 세기

좌우 방향으로 그칸만큼 이동
*/
