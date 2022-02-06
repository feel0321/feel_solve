function solution(N, stages) {
  let result = [];

  for (let i = 0; i < N; i++)
    result[i] = [
      stages.filter((stage) => stage === i + 1).length /
        stages.filter((stage) => stage >= i + 1).length,
      i,
    ];

  return result.sort((a, b) => b[0] - a[0]).map((element) => element[1] + 1);
}
