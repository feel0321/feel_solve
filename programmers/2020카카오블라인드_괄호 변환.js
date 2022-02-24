/*
(하고 )의 개수가 같으면 균형잡힘
균형잡힌거중에 괄호 짝도 맞으면 올바름

solution(p: 균형잡힌거): 올바른거
*/
const open = "(";
const close = ")";

function solution(p) {
  if (check(p)) return p;
  // 1
  if (!p) return "";
  // 2
  let u = p.slice(0, 2);
  let v = p.slice(2);
  let i = 2;
  while (
    u.split("").filter((element) => element === "(").length !==
      u.split("").filter((element) => element === ")").length &&
    i <= p.length
  ) {
    u = p.slice(0, i);
    v = p.slice(i);
    i += 2;
  }
  // 3
  if (check(u)) return u + solution(v);
  // 4
  let newU = "(" + solution(v) + ")" + change(u.slice(1, u.length - 1));
  return newU;
}

function check(inputStr) {
  let stack = [];

  for (let str of inputStr) {
    if (str === open) {
      stack.push(str);
      continue;
    }
    if (inputStr[inputStr.length - 1] === close) {
      stack.pop();
      continue;
    }
    return false;
  }
  return stack.length ? false : true;
}

function change(inputStr) {
  const arr = inputStr.split("");
  for (let i in arr) {
    if (arr[i] === open) {
      arr[i] = close;
      continue;
    }
    if (arr[i] === close) arr[i] = open;
  }
  return arr.join("");
}
