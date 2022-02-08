function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let i2 = i + 1; i2 < nums.length - 1; i2++) {
      for (let i3 = i2 + 1; i3 < nums.length; i3++) {
        if (isSosu(nums[i] + nums[i2] + nums[i3])) answer += 1;
      }
    }
  }
  return answer;
}

function isSosu(number) {
  // 소수 확인할 때는 제곱근까지만 확인하면 됨
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
