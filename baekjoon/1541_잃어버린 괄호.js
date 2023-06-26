const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = solution(input);
console.log(answer);

// + 연산자 처리 => - 연산자 처리해야 최소값이 된다
function solution(input) {
  const numbers = [];
  input.split("-").forEach((str) => {
    const number = str
      .split("+")
      .map(Number)
      .reduce((acc, num) => acc + num, 0);
    numbers.push(number);
  });
  return numbers[0] - numbers.slice(1).reduce((acc, num) => acc + num, 0);
}
