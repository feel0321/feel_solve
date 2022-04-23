const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [treeCount, need] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

console.log(solution(trees, need));

function solution(trees, need) {
  let left = 0;
  let right = Math.max(...trees);
  let maxHeight = -Infinity;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const cut = trees.map((tree) => tree - mid);

    const sumCutTrees = cut.reduce((acc, tree) => {
      if (tree > 0) {
        acc += tree;
      }
      return acc;
    }, 0);

    if (sumCutTrees >= need) {
      if (maxHeight > sumCutTrees) {
        maxHeight = sumCutTrees;
      }

      left = mid + 1;
      continue;
    }
    right = mid - 1;
  }

  return right;
}
