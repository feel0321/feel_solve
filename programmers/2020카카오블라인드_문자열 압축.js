function solution(s) {
  if (s.length <= 2) return s.length;

  const result = [s.length];

  for (let i = 1; i <= parseInt(String(s.length / 2), 10); i++) {
    let i2 = 0;
    let count = 1;
    let new_s = "";

    while (i2 < s.length) {
      const current = s.slice(i2, i2 + i);
      const next = s.slice(i2 + i, i2 + 2 * i);
      if (current === next) {
        count += 1;
      } else {
        new_s += `${count > 1 ? count : ""}${current}`;
        count = 1;
      }
      i2 += i;
    }
    result.push(new_s.length);
  }
  return Math.min(...result);
}
