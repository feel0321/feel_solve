function solution(a, b, g, s, w, t) {
  // a + b <= Gold Max + Silver Min = Gold Min + Silver Max = add
  // 이 조건읆 만족한다면 현재 t tlrksdms a, b를 운반할 수 있다
  //
  // 최대 필요량 (10^9), 최소 무게 (1), 최대 시간 (10^5), 금과 은 각각 2번씩 왕복
  let answer = 10e5 * 4 * 10e9;
  let start = 0;
  let end = 10e5 * 4 * 10e9;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let gold = 0;
    let silver = 0;
    let add = 0;

    for (let i = 0; i < s.length; i++) {
      let now_g = g[i];
      let now_s = s[i];
      let now_w = w[i];
      let now_t = t[i];
      let move_cnt = Math.floor(mid / (now_t * 2));

      if (mid % (now_t * 2) >= t[i]) {
        move_cnt++;
      }

      gold += now_g < move_cnt * now_w ? now_g : move_cnt * now_w;
      silver += now_s < move_cnt * now_w ? now_s : move_cnt * now_w;
      add +=
        now_g + now_s < move_cnt * now_w ? now_g + now_s : move_cnt * now_w;
    }

    if (gold >= a && silver >= b && add >= a + b) {
      end = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      start = mid + 1;
    }
  }

  return answer;
}
