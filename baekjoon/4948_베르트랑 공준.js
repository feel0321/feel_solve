const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.splice(input.length - 1, 1);
input = input.map(Number);

const answer = solution(input);
console.log(answer);

function solution(input) {
  const max = Math.max(...input) * 2 + 1;
  const sosuArr = Array.from({ length: max }, () => true);
  for (let i = 2; i <= max; i++) {
    if (sosuArr[i]) {
      let i2 = i * 2;
      while (i2 <= max) {
        sosuArr[i2] = false;
        i2 += i;
      }
    }
  }

  const answer = [];
  input.forEach((num) => {
    let count = 0;

    for (let i = num + 1; i <= 2 * num; i++) {
      if (sosuArr[i]) {
        count += 1;
      }
    }
    answer.push(count);
  });

  return answer.join("\n");
}
