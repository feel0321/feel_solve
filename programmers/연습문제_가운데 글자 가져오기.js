function solution(s) {
  const len = s.length;
  return len % 2 === 0
    ? s.slice(len / 2 - 1, len / 2 + 1)
    : s.slice(parseInt(String(len / 2), 10), parseInt(String(len / 2), 10) + 1);
}
