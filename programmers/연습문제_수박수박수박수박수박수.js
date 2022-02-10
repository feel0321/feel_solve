function solution(n) {
  if (n % 2 === 0) return "수박".repeat(n / 2);

  const half_n = parseInt(String(n / 2), 10);

  return "수박".repeat(half_n) + "수";
}
