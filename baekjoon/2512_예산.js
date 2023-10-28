const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, moneyLine, maxMoney] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

maxMoney = Number(maxMoney);

moneyLine = moneyLine.split(" ").map(Number);

const answer = solution(moneyLine, maxMoney);
console.log(answer);

function solution(moneyLine, maxMoney) {
  const sum = moneyLine.reduce((result, money) => result + money, 0);
  if (sum <= maxMoney) {
    return Math.max(...moneyLine);
  }

  return search(moneyLine, maxMoney);
}

function search(moneyLine, maxMoney) {
  let start = 1;
  let end = Math.max(...moneyLine);

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const sum = moneyLine.reduce((result, money) => {
      if (money > mid) {
        return result + mid;
      } else {
        return result + money;
      }
    }, 0);

    if (sum < maxMoney) {
      start = mid + 1;
    } else if (sum > maxMoney) {
      end = mid;
    } else {
      // 딱 맞는 경우를 찾았을 때 (베스트)
      return mid;
    }
  }

  // 조건문에 걸렸으면 over된 상황이니까 1개 이전으로
  return start - 1;
}
