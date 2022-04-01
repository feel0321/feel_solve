const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = "";
let info = {
  ")": "(",
  "]": "[",
};

input.pop();
input.forEach((command) => {
  answer += check(command);
});
console.log(answer);

function check(command) {
  let stack = [];

  for (let str of command) {
    if (Object.values(info).includes(str)) {
      stack.push(str);
      continue;
    }
    if (Object.keys(info).includes(str)) {
      const value = stack.pop();
      if (info[str] !== value) return "no\n";
    }
  }
  return stack.length ? "no\n" : "yes\n";
}
