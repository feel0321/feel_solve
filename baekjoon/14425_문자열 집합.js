const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [line, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = line.split(" ").map(Number);

const answer = solution(input.slice(0, n), input.slice(n));
console.log(answer);

function solution(strings, input) {
  const set = new Set(strings);
  let count = 0;

  input.forEach((str) => {
    if (set.has(str)) {
      count += 1;
    }
  });

  return count;
}
