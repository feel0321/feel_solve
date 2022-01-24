function solution(lottos, win_nums) {
  let match_count = 0;
  let zero_count = 0;

  for (let lotto of lottos) {
    if (!lotto) zero_count += 1;
    if (win_nums.includes(lotto)) match_count += 1;
  }
  return [match_lotto(match_count + zero_count), match_lotto(match_count)];
}

function match_lotto(count) {
  if (count > 1) {
    return 7 - count;
  }
  return 6;
}

// case1
const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
const result = [3, 5];

// case2
// const lottos = [0, 0, 0, 0, 0, 0];
// const win_nums = [38, 19, 20, 40, 15, 25];
// const result = [1, 6];

// case3
// const lottos = [45, 4, 35, 20, 3, 9];
// const win_nums = [20, 9, 3, 45, 4, 35];
// const result = [1, 1];

console.log(solution(lottos, win_nums, result));
console.log(result);
