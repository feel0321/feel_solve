const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.split(" ");

console.log(solution(input));

function solution(arr) {
  let newArr = [];
  for (let value of arr) {
    let str = "";
    for (let i = value.length - 1; i >= 0; i--) {
      str += value[i];
    }
    newArr.push(str);
  }
  return Math.max(...newArr.map(Number));
}
