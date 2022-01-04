const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
console.log(input);
input = input[0];
console.log(input);
input = input.split(" ").map((item) => +item);
console.log(input);

solution(input[0], input[1]);

function solution(A, B) {
  // Write your code
  console.log(A + B);
}
