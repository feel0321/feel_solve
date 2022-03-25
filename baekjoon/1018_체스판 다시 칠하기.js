const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input, ...command] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [y, x] = input.split(" ").map(Number);

solution(command);

function solution(command) {
  let answer = [];

  for (let i = 0; i <= y - 8; i++) {
    for (let i2 = 0; i2 <= x - 8; i2++) {
      answer.push(check(command, i, i2));
    }
  }
  // console.log(answer);
  console.log(Math.min(...answer));
}

function check(command, startY, startX) {
  let yes = 0;
  let no = 0;
  let start = command[0][0];

  for (let i = startY; i < startY + 8; i++) {
    for (let i2 = startX; i2 < startX + 8; i2++) {
      // start에서 홀수칸 이동한 경우 달라야 함
      if ((i + i2) % 2 && command[i][i2] !== start) {
        yes += 1;
        continue;
      }
      // start에서 짝수칸 이동한 경우 같아야 함
      if ((i + i2) % 2 === 0 && command[i][i2] === start) {
        yes += 1;
        continue;
      }
      no += 1;
    }
  }
  // yes든 no든 작은걸 다시 색칠
  return Math.min(yes, no);
}
/*
8 x 8을 잘라내고
다시 칠하기
제일 작게 칠하기
*/
