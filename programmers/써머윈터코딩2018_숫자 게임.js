function solution(A, B) {
  let answer = 0;
  let aIndex = 0;
  let bIndex = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  //   for문보다 while문이 더 자세한 조절이 가능하다
  //   너무 forEach쪽으로 생각한듯?
  while (aIndex < A.length && bIndex < B.length) {
    if (A[aIndex] < B[bIndex]) {
      answer += 1;
      aIndex += 1;
      bIndex += 1;
    } else {
      bIndex += 1;
    }
  }

  return answer;
}
