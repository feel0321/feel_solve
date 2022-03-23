const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [len, string] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(string));

function solution(string) {
  const r = 31;
  const m = 1234567891;
  let temp = [];
  let answer = 0;

  for (let str of string) {
    temp.push(str.charCodeAt() - "a".charCodeAt() + 1);
  }
  temp.forEach((num, idx) => {
    answer += r ** idx * num;
  });
  return answer % m;
}
