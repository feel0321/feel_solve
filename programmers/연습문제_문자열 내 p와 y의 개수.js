function solution(s) {
  s = s.toLowerCase().split("");
  const count_p = s.reduce((result, element) => {
    if (element === "p") result += 1;
    return result;
  }, 0);
  const count_y = s.reduce((result, element) => {
    if (element === "y") result += 1;
    return result;
  }, 0);

  return count_p === count_y;
}
