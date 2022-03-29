const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [num1, num2] = input.split(" ").map(Number);

console.log(solution(num1, num2));

function solution(num1, num2) {
  let gcd = 1;
  for (let val = Math.min(num1, num2); val > 0; val--) {
    if (num1 % val === 0 && num2 % val === 0) {
      gcd = val;
      break;
    }
  }

  let lcm = (num1 * num2) / gcd;

  return `${gcd}\n${lcm}`;
}
