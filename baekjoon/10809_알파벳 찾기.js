const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

function solution(data) {
  const arr = Array(26).fill(-1);
  for (let i = 0; i < data.length; i++) {
    arr[data[i].charCodeAt() - 97] = data.indexOf(data[i]);
  }
  return arr.join(" ");
}
