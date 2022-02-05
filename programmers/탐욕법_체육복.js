function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let lostMan of lost) {
    if (reserve.includes(lostMan)) {
      lost[lost.indexOf(lostMan)] = -1;
      reserve[reserve.indexOf(lostMan)] = -1;
    }
  }

  for (let lostMan of lost) {
    if (lostMan > -1 && reserve.includes(lostMan - 1)) {
      lost[lost.indexOf(lostMan)] = -1;
      reserve[reserve.indexOf(lostMan - 1)] = -1;
      continue;
    }
    if (lostMan > -1 && reserve.includes(lostMan + 1)) {
      lost[lost.indexOf(lostMan)] = -1;
      reserve[reserve.indexOf(lostMan + 1)] = -1;
    }
  }

  return n - lost.filter((lostMan) => lostMan > -1).length;
}
