function solution(arr, divisor) {
  const answer = arr.reduce((result, element) => {
    if (element % divisor === 0) result.push(element);
    return result;
  }, []);

  if (!answer.length) answer.push(-1);

  return answer.sort((a, b) => a - b);
}
