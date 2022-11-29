/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const arr = [];
  let score = 0;

  nums.forEach((num) => {
    score += num;
    arr.push(score);
  });

  return arr;
};
