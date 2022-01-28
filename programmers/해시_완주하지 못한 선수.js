function solution(participant, completion) {
  let result = {};
  let answer = "";

  for (let man of participant) {
    result[man] = result[man] ? result[man] + 1 : 1;
  }
  for (let man of completion) {
    result[man] -= 1;
  }
  answer = Object.entries(result).find((element) => element[1])[0];
  return answer;
}

// case1
const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
const result = "leo";

// case2
// const participant =["marina", "josipa", "nikola", "vinko", "filipa"]
// const completion = ["josipa", "filipa", "marina", "nikola"]
// const result = "vinko"

// case3
// const participant =["mislav", "stanko", "mislav", "ana"]
// const completion = ["stanko", "ana", "mislav"]
// const result = "mislav"

console.log(solution(participant, completion));
console.log(result);
