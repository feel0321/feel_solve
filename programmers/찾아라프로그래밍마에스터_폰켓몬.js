function solution(nums) {
  let set_nums = new Set(nums);

  return Math.min([...set_nums].length, nums.length / 2);
}
