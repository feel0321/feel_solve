function solution(s) {
  const open = "(";
  const close = ")";
  const stack = [];

  for (let str of s) {
    if (str === close) {
      const val = stack.pop();
      if (val !== open) return false;
      continue;
    }
    stack.push(str);
  }
  return stack.length ? false : true;
}
