const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [t, ...lines] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(lines));

function solution(data) {
  let answer = "";
  for (let line of data) {
    let [h, w, n] = line.split(" ").map(Number);
    let floor = n % h;
    if (!floor) floor = h;

    let room = n / h;
    answer += `${floor}${
      Math.ceil(room) > 9 ? Math.ceil(room) : `0${Math.ceil(room)}`
    }\n`;
  }
  return answer;
}
/*
4 8 12
3 7 11
2 6 10
1 5 9
*/
