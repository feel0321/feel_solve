function solution(left, right) {
  let answer = 0;

  for (let val = left; val <= right; val++) {
    if (Math.sqrt(val) % 1 === 0) {
      answer -= val;
      continue;
    }
    answer += val;
  }

  return answer;
}
