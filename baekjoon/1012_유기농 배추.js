const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testCase = Number(input[0]);
let idx = 1;
let answer = "";

while (testCase) {
  let [garo, sero, baechu] = input[idx++].split(" ").map(Number);
  let val = 0;
  const ground = [[]];

  const initialArr = [];
  initialArr.length = garo + 1;
  initialArr.fill(0);

  for (let i = 0; i < sero; i++) ground.push([...initialArr]);

  while (baechu) {
    const [x, y] = input[idx++].split(" ").map(Number);
    ground[y + 1][x + 1] = 1;
    baechu -= 1;
  }

  for (let i = 1; i <= sero; i++) {
    for (let i2 = 1; i2 <= garo; i2++) {
      if (DFS(i2, i)) val += 1;
    }
  }
  answer += `${val}\n`;
  testCase -= 1;

  function DFS(x, y) {
    if (x < 1 || y < 1 || x > garo || y > sero) return false;
    if (ground[y][x]) {
      ground[y][x] = 0;
      DFS(x + 1, y);
      DFS(x, y + 1);
      DFS(x - 1, y);
      DFS(x, y - 1);
      return true;
    }
    return false;
  }
}
console.log(answer);
