const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let [firstLine, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [unHearCount, unSeeCount] = firstLine.split(" ").map(Number);
let idx = 0;
const people = {};

while (idx < input.length) {
  if (people[input[idx]] === undefined) {
    people[input[idx]] = {};
  }

  if (idx < unHearCount) {
    people[input[idx]].hear = true;
  } else {
    people[input[idx]].see = true;
  }
  idx += 1;
}

const filteredPeople = Object.entries(people).filter(
  ([key, value]) => value.hear && value.see
);

console.log(filteredPeople.length);
console.log(
  filteredPeople
    .map(([name]) => name)
    .sort((a, b) => a.localeCompare(b))
    .join("\n")
);
