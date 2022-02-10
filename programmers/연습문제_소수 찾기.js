function solution(n) {
  let result = [];
  result.length = n + 1;
  result.fill(1);
  result[0] = 0;
  result[1] = 0;

  for (let i = 2; i <= n; i++) {
    if (!result[i]) continue;
    for (let i2 = 2 * i; i2 <= n; i2 += i) result[i2] = 0;
  }

  return result.filter(Boolean).length;
}
