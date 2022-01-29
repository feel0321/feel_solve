function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let i2 = i + 1; i2 < nums.length; i2++) {
      if (nums[i] + nums[i2] === target) return [i, i2];
    }
  }
}
