const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);

const answer = solution(n);
console.log(answer);

function solution(n) {
  const sosuNumbers = getSosu(n);
  let left = 0;
  let right = 1;
  let sum = sosuNumbers[left];
  let count = 0;

  while (left < right && right <= sosuNumbers.length) {
    if (sum === n) count += 1;

    if (sum >= n) {
      sum -= sosuNumbers[left];
      left += 1;
    } else {
      sum += sosuNumbers[right];
      right += 1;
    }
  }
  return count;
}

function getSosu(n) {
  const infos = Array(n + 1).fill(true);
  infos[0] = false;
  infos[1] = false;

  const sosuNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (!infos[i]) continue;

    sosuNumbers.push(i);
    for (let i2 = 2 * i; i2 <= n; i2 += i) {
      infos[i2] = false;
    }
  }

  return sosuNumbers;
}
