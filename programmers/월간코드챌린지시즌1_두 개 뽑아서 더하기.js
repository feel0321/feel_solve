function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let i2 = i + 1; i2 < numbers.length; i2++) {
      if (answer.includes(numbers[i] + numbers[i2])) continue;
      answer.push(numbers[i] + numbers[i2]);
    }
  }

  return answer.sort((a, b) => a - b);
}
