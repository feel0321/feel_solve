function solution(n) {
  let result3 = [];
  let answer = 0;

  while (n >= 3) {
    result3.push(n % 3);
    n = parseInt(n / 3, 10);
  }
  result3.push(n % 3);

  for (let i in result3) answer += result3[i] * 3 ** (result3.length - i - 1);

  return answer;
}
