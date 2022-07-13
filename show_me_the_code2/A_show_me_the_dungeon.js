const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [monsterCount, initialHP] = input[0].split(" ").map(Number);
// [몬스터, 사람]
const dataList = [];
for (let i = 0; i < monsterCount; i++) {
  const data = [input[1].split(" ")[i], input[2].split(" ")[i]].map(Number);
  dataList.push(data);
}
dataList.sort((a, b) => a[0] - b[0]);

console.log(solution(dataList, initialHP));

function solution(dataList, currentHP) {
  const costedHP = [];
  let savedCount = 0;

  for (const [hpCost, chainedCount] of dataList) {
    if (currentHP < hpCost) {
      break;
    }

    const currentHPCost = costedHP
      .concat(hpCost)
      .reduce((acc, hp) => acc + hp, 0);
    if (currentHP >= currentHPCost) {
      costedHP.push(hpCost);
      savedCount += chainedCount;
      currentHP -= currentHPCost;
    }
  }
  return savedCount;
}
