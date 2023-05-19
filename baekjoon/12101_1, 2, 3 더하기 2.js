const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.split(" ").map(Number);

const answer = solution(n, k);
console.log(answer);

function solution(n, k) {
  const answer = [];

  recur([], n, answer);

  return answer[k - 1] ? answer[k - 1].join("+") : -1;
}

function recur(inputMemories, target, answer) {
  const memories = [...inputMemories];

  if (memories.reduce((acc, memory) => (acc += memory), 0) === target) {
    answer.push(memories);
    return;
  }

  for (let num = 1; num <= 3; num++) {
    if (memories.reduce((acc, memory) => (acc += memory), num) <= target) {
      memories.push(num);
      recur(memories, target, answer);
      memories.pop();
    }
  }
}
