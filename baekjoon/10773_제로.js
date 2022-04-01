const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(Number);

console.log(solution(input));

function solution(input) {
  let stack = [];

  input.forEach((num) => {
    if (num) {
      stack.push(num);
    } else {
      stack.pop();
    }
  });
  // console.log(stack);
  return stack.reduce((acc, num) => (acc += num), 0);
}
