const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n")
);
