const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [allCount, questionCount] = firstLine.split(" ").map(Number);

console.log(solution(allCount, input));

function solution(allCount, input) {
  const pokemonNames = [];
  const pokemonObject = {};
  let answer = "";

  input.forEach((line, idx) => {
    if (idx < allCount) {
      pokemonNames.push(line);
      pokemonObject[line] = idx;
      return;
    }

    if (Number.isInteger(Number(line))) {
      answer += `${pokemonNames[line - 1]}\n`;
      return;
    }
    answer += `${Number(pokemonObject[line]) + 1}\n`;
  });
  return answer;
}
