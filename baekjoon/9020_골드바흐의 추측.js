const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input = input.map(Number);

const answer = solution(input);
console.log(answer);

function solution(numbers) {
  const max = Math.max(...numbers);
  const memory = Array(max).fill(true);
  memory[0] = false;
  memory[1] = false;
  for (let i = 2; i <= max; i++) {
    if (memory[i]) {
      for (let i2 = i * 2; i2 <= max; i2 += i) {
        memory[i2] = false;
      }
    }
  }

  return numbers.map(check).join("\n");

  function check(number) {
    for (let i = Math.floor(number / 2); i >= 2; i--) {
      if (memory[i] && memory[number - i]) {
        return `${i} ${number - i}`;
      }
    }
  }
}
