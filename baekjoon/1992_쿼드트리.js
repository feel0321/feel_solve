const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input.forEach((line, i) => {
  input[i] = line.split("").map(Number);
});

const answer = solution(input, n);
console.log(answer);

/*
4등분
모두 1 또는 0 인가? => 1 또는 0으로 압축
아니라면, 다시
*/
function solution(input, n) {
  let answer = "";

  const result = check(input);
  if (result === null) {
    answer += `(`;
    divide4(input, n);
    answer += `)`;
  } else {
    answer += String(result);
  }

  return answer;

  function divide4(arr, n) {
    const half = n / 2;
    const leftTop = [];
    const rightTop = [];
    const leftBottom = [];
    const rightBottom = [];

    for (let i = 0; i < half; i++) {
      leftTop.push(arr[i].slice(0, half));
      rightTop.push(arr[i].slice(half));
    }
    for (let i = half; i < n; i++) {
      leftBottom.push(arr[i].slice(0, half));
      rightBottom.push(arr[i].slice(half));
    }

    const resultArr = [leftTop, rightTop, leftBottom, rightBottom];
    resultArr.forEach((element) => {
      const result = check(element);
      if (result === null) {
        answer += `(`;
        divide4(element, half);
        answer += `)`;
      } else {
        answer += String(result);
      }
    });
  }
}

function check(arr) {
  const firstValue = arr[0][0];
  const allSame = arr.every((line) => {
    return line.every((num) => num === firstValue);
  });

  return allSame ? firstValue : null;
}
