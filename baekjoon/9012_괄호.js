const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(input) {
  let answer = "";

  input.forEach((line) => {
    answer += check(line);
  });
  return answer;
}

function check(line) {
  const stack = [];

  for (const char of line.split("")) {
    if (char === "(") {
      stack.push(char);
      continue;
    }
    if (char === ")") {
      const top = stack.pop();
      if (top !== "(") return "NO\n";
    }
  }
  return stack.length ? "NO\n" : "YES\n";
}
