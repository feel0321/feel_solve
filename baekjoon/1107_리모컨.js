const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [target, n, brokenNumbers] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
target = Number(target);
n = Number(n);
brokenNumbers = n ? brokenNumbers.split(" ").map(Number) : [];

const answer = solution(target, brokenNumbers);
console.log(answer);

function solution(target, brokenNumbers) {
  // 현재 채널 100에서 +, -만 사용하는 경우
  let min = Math.abs(target - 100);

  for (let num = 0; num <= 1000000; num++) {
    const str = String(num);

    for (let i = 0; i < str.length; i++) {
      if (brokenNumbers.includes(Number(str[i]))) break;

      //  고장난 숫자 없이 마지막 자리까지 온 경우
      if (i === str.length - 1) {
        min = Math.min(min, Math.abs(num - target) + str.length);
      }
    }
  }

  return min;
}
