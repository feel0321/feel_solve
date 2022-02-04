function longestCommonPrefix(strs: string[]): string {
  let answer = "";
  const short = strs.map((element) => element.length).sort((a, b) => a - b)[0];

  for (let i = 0; i < short; i++) {
    let temp = strs[0][i];
    if (strs.every((element) => element[i] === temp)) {
      answer += temp;
      continue;
    }
    return answer;
  }
  return answer;
}
