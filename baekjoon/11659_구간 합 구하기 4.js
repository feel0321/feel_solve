const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, numberList, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
numberList = numberList.split(" ").map(Number);

console.log(solution(input, numberList));

function solution(input, numberList) {
  const sumList = [numberList[0]];

  for (let i = 1; i < numberList.length; i++) {
    const newValue = sumList[i - 1] + numberList[i];
    sumList.push(newValue);
  }

  return input
    .map((line) => {
      const [start, end] = line.split(" ").map(Number);
      if (start === 1) {
        return sumList[end - 1];
      }
      return sumList[end - 1] - sumList[start - 2];
    })
    .join("\n");
}
