const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [computer, inputCount, ...command] = input;
computer = Number(computer);
command = command.map((element) => element.split(" ").map(Number));

const initialArr = [];
initialArr.length = computer + 1;
initialArr.fill(0);

const connect = [];
const visited = [];
for (let i = 0; i <= computer; i++) {
  connect.push([...initialArr]);
}

for (let line of command) {
  const [start, end] = line;
  connect[start][end] = 1;
  connect[end][start] = 1;
}

DFS(1);
console.log(visited.length - 1);

function DFS(start) {
  visited.push(start);

  for (let i = 1; i <= computer; i++) {
    if (connect[start][i] && !visited.includes(i)) {
      DFS(i);
    }
  }
}
