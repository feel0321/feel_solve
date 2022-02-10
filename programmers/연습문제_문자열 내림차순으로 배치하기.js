function solution(s) {
  return (s = s
    .split("")
    .sort((a, b) => {
      if (b > a) return 1;
      if (a === b) return 0;
      return -1;
    })
    .join(""));
}
