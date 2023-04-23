const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = firstLine.split(" ").map(Number);
const houses = [];
const chickens = [];
input.forEach((line, y) => {
  input[y] = line.split(" ").map(Number);
  input[y].forEach((value, x) => {
    if (value === 1) {
      houses.push([y, x]);
    } else if (value === 2) {
      chickens.push([y, x]);
    }
  });
});

const answer = solution(houses, chickens, n, m);
console.log(answer);

/*
치킨 거리의 합이 가장 작아야 함
같은 거리면 폐업시켜야 함

5개 중 최대 3개 빼고 폐업
=> 2개 무조건 폐업
*/
function solution(houses, chickens, n, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = chickens.length - m; i < chickens.length; i++) {
    deleteChicken(i, 0, chickens, []);
  }
  return answer;

  function deleteChicken(i, i2, chickens, deleted) {
    if (deleted.length === i) {
      caculate(chickens, deleted);
      return;
    }

    for (let i3 = i2; i3 < chickens.length; i3++) {
      if (deleted.includes(i3)) continue;

      deleted.push(i3);
      deleteChicken(i, i3, chickens, deleted);
      deleted.pop();
    }
  }

  function caculate(chickens, deleted) {
    const distances = [];
    houses.forEach((house) => {
      const [houseY, houseX] = house;
      let minDistance = Number.MAX_SAFE_INTEGER;

      chickens.forEach((chicken, i2) => {
        if (!deleted.includes(i2)) {
          const [chickenY, chickenX] = chicken;
          const chickenDistance =
            Math.abs(chickenY - houseY) + Math.abs(chickenX - houseX);
          minDistance = Math.min(minDistance, chickenDistance);
        }
      });
      distances.push(minDistance);
    });
    answer = Math.min(
      answer,
      distances.reduce((acc, distance) => (acc += distance), 0)
    );
  }
}
