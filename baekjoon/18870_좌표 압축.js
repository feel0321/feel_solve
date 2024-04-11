const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input = input.split(" ").map(Number);

const answer = solution(input);
console.log(answer);

function solution(numbers) {
  const answer = [];
  const indexedNumbers = numbers.map((num, i) => [num, i]);
  let prevValue = null;
  let count = 0;

  indexedNumbers
    .sort((a, b) => a[0] - b[0])
    .forEach(([num, i]) => {
      if (prevValue !== null && num !== prevValue) {
        count++;
      }
      answer[i] = count;
      prevValue = num;
    });

  return answer.join(" ");
}
