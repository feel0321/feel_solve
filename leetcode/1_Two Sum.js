/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let i2 = i + 1; i2 < nums.length; i2++) {
      if (nums[i] + nums[i2] === target) return [i, i2];
    }
  }
};

// 2
var twoSum = function (nums, target) {
  const info = {};
  // 값: 인덱스 쌍으로 저장
  for (let i = 0; i < nums.length; i++) {
    info[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    // 차이가 info에 있고 (nums에 있고) and
    // 값이 다르면 정답
    if (diff in info && info[diff] !== i) {
      return [i, info[diff]];
    }
  }
};
