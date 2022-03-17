const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(data) {
  let info = {};
  let newStr = data.toUpperCase();
  for (let str of newStr) {
    info[str] = (info[str] || 0) + 1;
  }
  let answer = Object.entries(info).filter(
    (element) => element[1] === Math.max(...Object.values(info))
  );
  // console.log(answer);
  if (answer.length > 1) return "?";
  return answer[0][0];
}
