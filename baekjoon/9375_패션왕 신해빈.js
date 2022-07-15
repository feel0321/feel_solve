const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [caseCount, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
caseCount = Number(caseCount);

console.log(solution(input, caseCount));

function solution(input, caseCount) {
  let currCount = 0;
  let idx = 0;
  let answer = [];

  while (currCount < caseCount) {
    const allClothesCount = input[idx];
    let currentClothesCount = 1;
    const info = {};
    idx += 1;

    while (currentClothesCount <= allClothesCount) {
      const [name, kind] = input[idx].split(" ");
      info[kind] = (info[kind] || []).concat(name);
      currentClothesCount += 1;
      idx += 1;
    }
    currCount += 1;
    const clothesList = Object.values(info);

    const kindCount =
      clothesList.reduce(
        (acc, clothesKind) => (acc *= clothesKind.length + 1),
        1
      ) - 1;
    answer.push(kindCount);
  }
  return answer.join("\n");
}
