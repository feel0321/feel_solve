function solution(s) {
  return transform(s, 0, 0);
}

function transform(s, count, zeroCount) {
  if (s == "1") {
    return [count, zeroCount];
  }

  let string = s;
  while (string.includes("0")) {
    string = string.replace("0", "");
    zeroCount += 1;
  }

  const arr = [];
  let div = string.length;
  let modular = 0;
  while (div >= 2) {
    modular = div % 2;
    div = Math.floor(div / 2);
    arr.push(modular);
  }
  arr.push(div);
  s = arr.reverse().join("");

  return transform(s, count + 1, zeroCount);
}
