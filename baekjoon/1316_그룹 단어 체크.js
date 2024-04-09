const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input);
console.log(answer);

function solution(input) {
  let count = 0;

  input.forEach((line) => {
    if (check(line)) {
      count += 1;
    }
  });

  return count;
}

function check(string) {
  let prev = string[0];
  let memory = {
    [prev]: true,
  };

  for (let i = 1; i < string.length; i++) {
    const str = string[i];

    if (prev === str) {
      // nothing
    } else if (!(str in memory)) {
      memory[str] = true;
    } else if (memory[str]) {
      return false;
    }

    prev = str;
  }

  return true;
}
