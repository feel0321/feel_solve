function solution(n, stations, w) {
  let answer = 0;
  let index = 1;
  let stationIndex = 0;

  while (index <= n) {
    const inStations =
      stationIndex < stations.length &&
      stations[stationIndex] - w <= index &&
      index <= stations[stationIndex] + w;
    if (inStations) {
      index = stations[stationIndex] + w + 1;
      stationIndex += 1;
    } else {
      answer += 1;
      index += 2 * w + 1;
    }
  }

  return answer;
}
