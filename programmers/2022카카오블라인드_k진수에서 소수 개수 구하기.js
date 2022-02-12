function solution(n, k) {
  let arr = n
    .toString(k)
    .split("0")
    .map((element) => Number(element));

  return arr.filter((element) => isSosu(element)).length;
}

function changeTo10(str, k) {
  if (k === 10) return Number(str);

  let result = 0;
  for (let i in str) result += str[i] ** (str.length - i);

  return result;
}

function isSosu(number) {
  if (number < 2) return false;

  if (number === 2) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}
