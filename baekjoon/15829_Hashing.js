const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [len, string] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(string));

function solution(str) {
  let r = 1;
  const R = 31;
  const m = 1234567891;
  let answer = 0;
  for (let i = 0; i < len; i++) {
    answer += (str.charCodeAt(i) - 96) * r;
    answer %= m;
    r *= R;
    r %= m;
    // r이 지수승이라 엄청 커지니까 루프마다 %m
  }
  return answer;
}

/* 50점 코드
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
*/
