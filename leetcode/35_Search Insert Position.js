/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums.includes(target)) {
    nums.push(target);
    nums.sort((a, b) => a - b);
  }
  return nums.findIndex((num) => num == target);
};
/*
nums가 정렬되어 주어지기 때문에 이진탐색이 가장 베스트일듯?
*/
