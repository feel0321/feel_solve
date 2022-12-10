/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 1
var search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// 2
var search = function (nums, target) {
  return nums.findIndex((num) => num == target);
};
