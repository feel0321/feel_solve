const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((element) => element.split(" ").map(Number));
console.log(solution(input));

function solution(input) {
  return input
    .sort((a, b) => {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;

      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
    })
    .map((element) => element.join(" "))
    .join("\n");
}
