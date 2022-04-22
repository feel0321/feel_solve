const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [start, end] = input.split(" ").map(Number);

console.log(solution(start, end));

function solution(start, end) {
  const arr = Array(end + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let num = 2; num <= end; num++) {
    if (!arr[num]) {
      continue;
    }
    let index = num * 2;
    while (index <= end) {
      arr[index] = false;
      index += num;
    }
  }

  return arr
    .map((value, idx) => {
      if (value && idx >= start && idx <= end) {
        return idx;
      }
    })
    .filter(Boolean)
    .join("\n");
}
