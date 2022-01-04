const fs = require("fs");
// 백준 플랫폼이 리눅스기 때문. 로컬에서 테스트시 input.txt에 입력받을 내용을 입력 후 파일을 읽어오는식으로 테스트
const filePath = process.platform === "linux" ? "/dev/stdin" : "./../input.txt";

const [num1, num2] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((element) => Number(element));

solution(num1, num2);

function solution(a, b) {
  console.log(a * (b % 10));
  console.log(a * (parseInt(b / 10) % 10));
  console.log(a * parseInt(b / 100));
  console.log(a * b);
}
