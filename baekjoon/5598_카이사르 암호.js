const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(input) {
  return input
    .split("")
    .map((string) => {
      const code = string.charCodeAt() - 3;
      return String.fromCharCode(code >= 65 ? code : code + 26);
    })
    .join("");
}
