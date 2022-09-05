/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const arr = [];

  for (const num of nums) {
    if (num !== val) {
      arr.push(num);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  return arr.length;
};
