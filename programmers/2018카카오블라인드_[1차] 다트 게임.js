function solution(dartResult) {
  const bonus = {
    S: 1,
    D: 2,
    T: 3,
  };
  let result = [];

  let current_str = "";
  let current_num;
  for (let i in dartResult) {
    // 점수
    if (Number.isInteger(Number(dartResult[i]))) {
      current_str += dartResult[i];
      continue;
    }
    // 보너스
    if (Object.keys(bonus).includes(dartResult[i])) {
      current_num = Number(current_str);
      current_str = "";
      result.push(current_num ** bonus[dartResult[i]]);
      continue;
    }
    // 스타상
    if (dartResult[i] === "*") {
      result = result.map((element, idx) => {
        if (idx >= result.length - 2) return element * 2;
        return element;
      });
      continue;
    }
    // 아차상
    result[result.length - 1] = -1 * result[result.length - 1];
  }

  return result.reduce((sum, element) => (sum += element));
}
