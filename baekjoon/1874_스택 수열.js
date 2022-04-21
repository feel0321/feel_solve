const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(Number);

console.log(solution(input));

function solution(input) {
  let number = 0;
  let answer = "";
  const stack = [];

  for (const target of input) {
    while (number < target) {
      stack.push(++number);
      answer += "+\n";
    }

    if (stack.length && stack[stack.length - 1] === target) {
      stack.pop();
      answer += "-\n";
      continue;
    }
    return "NO";
  }
  return answer;
}
