const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [allSiteCount, findSiteCount] = firstLine.split(" ").map(Number);

console.log(solution(allSiteCount, input));

function solution(allSiteCount, input) {
  const info = {};
  let answer = "";

  input.forEach((line, idx) => {
    const [siteName, password] = line.split(" ");
    if (idx < allSiteCount) {
      info[siteName] = password;
      return;
    }
    answer += `${info[siteName]}\n`;
  });

  return answer;
}
