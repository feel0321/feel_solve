const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(input) {
  let answer = [...new Set(input)];
  answer.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (b.length > a.length) return -1;

    // 여기부터 a.length === b.length일 때

    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });
  return answer.join("\n");
}
