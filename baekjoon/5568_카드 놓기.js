const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [_, k, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
k = Number(k);

const answer = solution(input, k);
console.log(answer);

function solution(input, k) {
  const set = new Set();
  const initialCards = [];
  const initialChecked = new Array(input.length).fill(false);

  dfs(initialCards, initialChecked);

  function dfs(card, checked) {
    if (card.length === k) {
      set.add(card.join(""));
      return;
    }

    for (let i = 0; i < input.length; i++) {
      if (!checked[i]) {
        checked[i] = true;
        card.push(input[i]);
        dfs(card, checked);
        checked[i] = false;
        card.pop();
      }
    }
  }

  return set.size;
}
