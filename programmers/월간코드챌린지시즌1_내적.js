function solution(a, b) {
  let answer = a.reduce((result, element, idx) => {
    result += a[idx] * b[idx];
    return result;
  }, 0);

  return answer;
}

// case1
const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
const result = 3;

// case2
// const a = [-1, 0, 1];
// const b = [1, 0, -1];
// const result = -2;

console.log(solution(a, b));
console.log(result);
