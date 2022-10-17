function solution(survey, choices) {
  const info = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((sv, i) => {
    const [str, score] = check(sv, choices[i]);
    info[str] += score;
  });

  let answer = "";
  answer += info.T > info.R ? "T" : "R";
  answer += info.F > info.C ? "F" : "C";
  answer += info.M > info.J ? "M" : "J";
  answer += info.N > info.A ? "N" : "A";
  return answer;
}

function check(string, choice) {
  switch (choice) {
    case 1:
    case 2:
    case 3:
    case 4: {
      return [string[0], 4 - choice];
    }
    case 5:
    case 6:
    case 7: {
      return [string[1], choice - 4];
    }
  }
}
/*
순회하면서 점수 반영
*/
