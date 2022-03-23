const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [cardCount, cards] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, m] = cardCount.split(" ").map(Number);
cards = cards
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(solution(m, cards));

function solution(target, cardArr) {
  let max = 0;
  for (let i = 0; i < cardArr.length - 2; i++) {
    for (let i2 = i + 1; i2 < cardArr.length - 1; i2++) {
      for (let i3 = i2 + 1; i3 < cardArr.length; i3++) {
        let temp = cardArr[i] + cardArr[i2] + cardArr[i3];
        if (temp > target) continue;
        if (temp > max) max = temp;
      }
    }
  }
  return max;
}
