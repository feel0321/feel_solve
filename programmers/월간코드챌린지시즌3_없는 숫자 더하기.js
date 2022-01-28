function solution(numbers) {
  const number_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;

  for (let number of number_arr) {
    if (!numbers.includes(number)) answer += number;
  }
  return answer;
}

// case1
const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
const result = 14;

// case2
// const numbers = [5,8,4,0,6,7,9]
// const result = 6;

console.log(solution(numbers));
console.log(result);
