const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
input.forEach((line, i) => {
  input[i] = line.split(" ").map(Number);
});

const WHITE = 0;
const BLUE = 1;

const answer = solution(input, n);
console.log(answer);

/*
분할정복 => 큰일을 작게 나눠서 생각해라

4등분 =>
  전부 같은 색이면 => 끝
  아니면 => 다시 4등분
*/

function solution(input, n) {
  const colorInfo = {
    [BLUE]: 0,
    [WHITE]: 0,
  };
  const result = check(input);
  if (result === null) {
    divide4(input, n);
  } else {
    colorInfo[result] += 1;
  }

  return `${colorInfo[WHITE]}\n${colorInfo[BLUE]}`;

  function divide4(arr, n) {
    if (n === 1) {
      const color = arr[0][0];
      colorInfo[color] += 1;
      return;
    }

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
        divide4(element, half);
      } else {
        colorInfo[result] += 1;
      }
    });
  }
}

function check(arr) {
  const firstNumber = arr[0][0];
  const everySame = arr.every((line) =>
    line.every((num) => num === firstNumber)
  );

  return everySame ? firstNumber : null;
}
