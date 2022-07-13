const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const timeList = input[1].split(" ").map(Number);

console.log(solution(timeList));

function solution(timeList) {
  const sortedTimeList = [...timeList].sort((a, b) => a - b);

  return sortedTimeList.reduce(
    (acc, time, index) => (acc += time * (timeList.length - index)),
    0
  );
}
