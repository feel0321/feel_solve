const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let idx = 0;
let testCase = Number(input[idx++]);
let answer = "";

while (testCase) {
  const [me, you] = input[idx++].split(" ").map(Number);
  answer += BFS(me, you);
  testCase -= 1;
}
console.log(answer);

function BFS(me, you) {
  const queue = [];
  queue.push([me, you, 0]);

  while (queue.length) {
    const [newMe, newYou, count] = queue.shift();
    if (newMe === newYou) return `${count}\n`;
    if (newMe < newYou) {
      queue.push([newMe * 2, newYou + 3, count + 1]);
      queue.push([newMe + 1, newYou, count + 1]);
    }
  }
}
