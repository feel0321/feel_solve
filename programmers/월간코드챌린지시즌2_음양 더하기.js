function solution(absolutes, signs) {
  let answer = 0;

  for (let i in absolutes) {
    if (!signs[i]) absolutes[i] = absolutes[i] * -1;
    answer += absolutes[i];
  }
  return answer;
}

// case1
const absolutes = [4, 7, 12];
const signs = [true, false, true];
const result = 9;

// case2
// const absolutes = [1, 2, 3];
// const signs = [false, false, true];
// const result = 0;

console.log(solution(absolutes, signs));
console.log(result);
