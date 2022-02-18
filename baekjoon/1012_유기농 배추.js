const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testCase = Number(input[0]);
let idx = 1;
let answer = "";

while (testCase) {
  let [garo, sero, baechu] = input[idx++].split(" ").map(Number);
  let val = 0;
  const ground = [[]];

  const initialArr = [];
  initialArr.length = garo + 1;
  initialArr.fill(0);

  // 땅 만들기
  for (let i = 0; i < sero; i++) ground.push([...initialArr]);

  // 배추 표시
  while (baechu) {
    const [x, y] = input[idx++].split(" ").map(Number);
    ground[y + 1][x + 1] = 1;
    baechu -= 1;
  }

  // 배추가 있으면 BFS 탐색, val 증가
  for (let i = 1; i <= sero; i++) {
    for (let i2 = 1; i2 <= garo; i2++) {
      // DFS
      if (DFS(i2, i)) val += 1;
      // BFS
      if (ground[i][i2]) {
        BFS(i2, i);
        val += 1;
      }
    }
  }
  answer += `${val}\n`;
  testCase -= 1;

  function DFS(x, y) {
    if (x < 1 || y < 1 || x > garo || y > sero) return false;
    if (ground[y][x]) {
      ground[y][x] = 0;
      DFS(x + 1, y);
      DFS(x, y + 1);
      DFS(x - 1, y);
      DFS(x, y - 1);
      return true;
    }
    return false;
  }

  function BFS(x, y) {
    const queue = [[x, y]];
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    while (queue.length) {
      // 현재 지점
      const [newX, newY] = queue.shift();
      // 현재 지점이 배추가 없으면 다음 루프
      if (!ground[newY][newX]) continue;
      // 배추가 있으면, 없는걸로 바꾸고
      ground[newY][newX] = 0;
      // 우 하 좌 상 갈수있는지 검사
      for (let i = 0; i < 4; i++) {
        const nextX = newX + dx[i];
        const nextY = newY + dy[i];
        // 범위 밖이면 못가는거니까 다음 루프
        if (nextX < 1 || nextY < 1 || nextX > garo || nextY > sero) continue;
        // 갈 수 있는 범위고, 배추가 있으면 큐에 넣어서 주변 배추를 계속 탐색
        if (ground[nextY][nextX]) queue.push([nextX, nextY]);
      }
    }
  }
}
console.log(answer);
