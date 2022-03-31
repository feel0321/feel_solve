const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((element) => element.split(" "));

console.log(solution(input));

function solution(input) {
  input.sort((a, b) => {
    if (Number(a[0]) > Number(b[0])) return 1;
    if (Number(a[0]) < Number(b[0])) return -1;
    return 0;
  });
  return input.map((element) => element.join(" ")).join("\n");
}
