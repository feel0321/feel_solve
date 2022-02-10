function solution(s) {
  if (s.startsWith("-")) return -1 * Number(s.slice(1));

  return Number(s);
}
