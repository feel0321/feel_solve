const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map(Number).sort((a, b) => a - b);

console.log(solution(input, n));

function solution(input, n) {
  let answer = "";
  const count = {};

  const sum = input.reduce((acc, num) => acc + num, 0);
  answer += `${Math.round(sum / n)}\n`;

  answer += `${input[Math.floor(n / 2)]}\n`;

  input.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  const countArr = Object.entries(count)
    .map(([value, countValue]) => [Number(value), countValue])
    .sort((a, b) => b[1] - a[1] || a[0] - b[0]);

  const max = countArr[0][1];
  const most_see = countArr.filter(([_, countValue]) => max === countValue);

  if (most_see.length > 1) {
    answer += `${most_see[1][0]}\n`;
  } else {
    answer += `${most_see[0][0]}\n`;
  }

  answer += `${Math.max(...input) - Math.min(...input)}`;
  return answer;
}
