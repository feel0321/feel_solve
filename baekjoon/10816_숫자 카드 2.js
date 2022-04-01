const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, cards, m, targets] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
cards = cards.split(" ");
targets = targets.split(" ");

console.log(solution(cards, targets));

function solution(cards, targets) {
  let count = {};

  cards.forEach((card) => {
    count[card] = (count[card] || 0) + 1;
  });
  // console.log(count);
  // console.log(targets);
  return targets.map((target) => (count[target] ? count[target] : 0)).join(" ");
}
