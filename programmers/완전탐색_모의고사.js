function solution(answers) {
  let math = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let result = [0, 0, 0];

  for (let i in answers) {
    for (let i2 = 0; i2 < 3; i2++) {
      if (answers[i] === math[i2][i % math[i2].length]) {
        result[i2] += 1;
      }
    }
  }

  const top_score = Math.max(...result);
  const answer = result.reduce((arr, element, idx) => {
    if (element === top_score) arr.push(idx + 1);
    return arr;
  }, []);

  return answer;
}
