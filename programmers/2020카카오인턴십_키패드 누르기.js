function solution(numbers, hand) {
  const location_arr = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  let current_left = [3, 0];
  let current_right = [3, 2];
  let answer = "";

  for (let number of numbers) {
    if ([1, 4, 7].includes(number)) {
      current_left = location_arr[number];
      answer += "L";
      continue;
    }
    if ([3, 6, 9].includes(number)) {
      current_right = location_arr[number];
      answer += "R";
      continue;
    }

    const [next_x, next_y] = location_arr[number];
    const left_distance =
      Math.abs(current_left[0] - next_x) + Math.abs(current_left[1] - next_y);
    const right_distance =
      Math.abs(current_right[0] - next_x) + Math.abs(current_right[1] - next_y);
    if (left_distance > right_distance) {
      current_right = [next_x, next_y];
      answer += "R";
      continue;
    }
    if (right_distance > left_distance) {
      current_left = [next_x, next_y];
      answer += "L";
      continue;
    }

    if (hand === "left") {
      current_left = [next_x, next_y];
      answer += "L";
      continue;
    }
    current_right = [next_x, next_y];
    answer += "R";
  }
  return answer;
}

// case1
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
const result = "LRLLLRLLRRL";

// case2
// const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
// const hand = "left";
// const result = "LRLLRRLLLRR";

// case3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const hand = "right";
// const result = "LLRLLRLLRL";

console.log(solution(numbers, hand));
console.log(result);
