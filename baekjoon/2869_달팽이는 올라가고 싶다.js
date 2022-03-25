const fs = require("fs");
const { uptime } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [up, down, height] = input.split(" ").map(Number);

console.log(solution(up, down, height));

function solution(up, down, height) {
  let move = up - down;
  let day = Math.floor((height - up) / move);
  let currentHeight = day * move;

  while (1) {
    currentHeight += up;
    day += 1;
    if (currentHeight >= height) break;
    currentHeight -= down;
  }
  return day;
}

/*
5 올라가고 3 내려감
=> 하루에 2씩 올라감

목표 - 올라가는량 (5)까지 도달하는 시간을 구하면 편할듯?

1일 5 4
2일 9 8
3일 13 12
4일 17 16
5일 21 20
6일 25 24
7일 29 28
8일 33 32
*/
