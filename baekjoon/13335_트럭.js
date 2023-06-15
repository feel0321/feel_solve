const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, secondLine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, length, weight] = firstLine.split(" ").map(Number);
const trucks = secondLine.split(" ").map(Number);

const answer = solution(trucks, length, weight);
console.log(answer);

function solution(trucks, length, weight) {
  const queue = [];
  let time = 0;
  let i = 0;

  while (i < trucks.length) {
    time += 1;

    if (queue.length === length) {
      queue.shift();
    }

    if (queue.reduce((acc, truck) => acc + truck, 0) + trucks[i] <= weight) {
      queue.push(trucks[i]);
      i += 1;
    } else {
      queue.push(0);
    }
  }

  return time + length;
}
