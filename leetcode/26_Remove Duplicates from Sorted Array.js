/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const info = [...new Set(nums)];

  for (let i = 0; i < info.length; i++) {
    nums[i] = info[i];
  }

  return info.length;
};
