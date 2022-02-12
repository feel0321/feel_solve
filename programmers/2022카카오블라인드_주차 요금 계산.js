/*
주차장을 이용한 시간에 따른 요금 계산

차량별로 이용 시간 계산
=> 시간에 따른 비용 계산
*/
function solution(fees, records) {
  const IN = "IN";
  const [defaultTime, defaultCost, minute, cost] = fees;
  const carLog = {};
  const answer = [];

  // 시간 계산
  for (let record of records) {
    const [time, carNum, log] = record.split(" ");

    // 입차
    if (log === IN) {
      // 첫 입차
      if (!carLog[carNum]) {
        carLog[carNum] = [time];
        continue;
      }
      carLog[carNum] = [...carLog[carNum], time];
      continue;
    }
    // 출차
    carLog[carNum] = [...carLog[carNum], time];
  }

  // 시간에 따른 요금 계산
  for (let carNum of Object.keys(carLog)) {
    // 출차 기록이 없으면 23:59 출차
    if (carLog[carNum].length % 2 === 1)
      carLog[carNum] = [...carLog[carNum], "23: 59"];

    let result = 0;
    let money = defaultCost;
    for (let i in carLog[carNum]) {
      const [min, sec] = carLog[carNum][i].split(":");
      if (i % 2 === 0) {
        result -= Number(min) * 60 + Number(sec);
        continue;
      }
      result += Number(min) * 60 + Number(sec);
    }
    // 기본시간 초과
    if (result > defaultTime)
      money += Math.ceil((result - defaultTime) / minute) * cost;

    answer.push([carNum, money]);
  }

  return answer.sort((a, b) => a[0] - b[0]).map((element) => element[1]);
}
