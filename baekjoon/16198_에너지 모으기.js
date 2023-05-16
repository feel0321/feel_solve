const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input = input.split(" ").map(Number);

const answer = solution(input, n);
console.log(answer);

function solution(input, n) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < n - 1; i++) {
    deleteIndex(input, i, 0);
  }

  return max;

  function deleteIndex(arr, idx, value) {
    const copiedArr = [...arr];
    const sum = value + copiedArr[idx - 1] * copiedArr[idx + 1];
    copiedArr.splice(idx, 1);

    if (copiedArr.length === 2) {
      max = Math.max(max, sum);
      return;
    }

    for (let i = 1; i < copiedArr.length - 1; i++) {
      deleteIndex(copiedArr, i, sum);
    }
  }
}
