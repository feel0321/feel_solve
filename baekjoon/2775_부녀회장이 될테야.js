const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let idx = 0;
let T = input[idx++];
const maxRoom = 14;

solution(T, idx);

function solution(T, idx) {
  let count = 0;
  let answer = "";
  const home = [Array.from({ length: maxRoom }, (_, idx) => idx + 1)];

  while (T > count) {
    let floor = Number(input[idx++]);
    let room = Number(input[idx++]);
    answer += calc(home, floor, room);
    count += 1;
  }
  console.log(answer);
}

function calc(home, floor, room) {
  while (floor >= home.length) {
    home.push([1]);
    for (let i = 1; i < maxRoom; i++) {
      home[home.length - 1][i] =
        home[home.length - 2][i] + home[home.length - 1][i - 1];
    }
  }
  return `${home[floor][room - 1]}\n`;
}
/*
아래층 1 ~ b호까지 사람들 합만큼 데려오기

1 3 6 10
1 2 3 4
*/
