function solution(arr) {
  let history = "";
  const answer = [];

  for (let str of arr) {
    if (history !== str) {
      answer.push(str);
      history = str;
    }
  }
  return answer;
}
