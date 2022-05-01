const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [y, x, inventory] = firstLine.split(" ").map(Number);
const ground = input.map((line) => line.split(" ").map(Number));

console.log(solution(ground, inventory));

function solution(ground, initInventory) {
  const y = ground.length;
  const x = ground[0].length;
  let answer = 0;
  let minTime = Number.MAX_SAFE_INTEGER;

  for (let height = 0; height < 257; height++) {
    let dig = 0;
    let put = 0;

    for (let i = 0; i < y; i++) {
      for (let i2 = 0; i2 < x; i2++) {
        const diff = ground[i][i2] - height;

        if (diff >= 0) {
          dig += diff;
        } else {
          put += Math.abs(diff);
        }
      }
    }

    const inventory = initInventory + dig;
    if (inventory < put) {
      continue;
    }

    const time = 2 * dig + put;
    if (time <= minTime) {
      // 답 (최소 시간)이 여러 개라면 땅의 높이가 높은것을 구해야 하는데
      // for문이 오름차순이기 때문에 해결
      minTime = time;
      answer = height;
    }
  }
  return `${minTime} ${answer}`;
}

/*
땅 고르기 하는데 필요한 최소 시간과 땅의 높이 출력
=> 답이 여러개라면 (최소 시간이 여러개라면) 땅의 높이가 높은 것

블록 제거 2초, 인벤토리 블록 꺼내 놓기 1초
*/
