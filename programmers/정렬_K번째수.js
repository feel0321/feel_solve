function solution(array, commands) {
  let answer = [];

  for (let command of commands) {
    const [i, j, k] = command;
    const result = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(result[k - 1]);
  }
  return answer;
}

// case1
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
const result = [5, 6, 3];

console.log(solution(array, commands));
console.log(result);
