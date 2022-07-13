const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...coninList] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [count, targetMoney] = firstLine.split(" ").map(Number);
coninList = coninList.map(Number);

console.log(solution(coninList, count, targetMoney));

function solution(coninList, count, targetMoney) {
  let currentMoney = targetMoney;
  let coinCount = 0;

  for (let i = count - 1; i >= 0; i--) {
    const coin = coninList[i];
    const share = parseInt(currentMoney / coin, 10);

    if (share >= 1) {
      currentMoney -= share * coin;
      coinCount += share;
    }
  }
  return coinCount;
}
