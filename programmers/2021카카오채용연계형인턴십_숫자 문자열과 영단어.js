function solution(s) {
  const eng_arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let eng of eng_arr) {
    while (s.includes(eng)) s = s.replace(eng, change_number(eng));
  }
  return Number(s);
}

function change_number(num) {
  switch (num) {
    case "zero":
      return 0;
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
  }
}

// case1
const s = "one4seveneight";
const result = 1478;

// case2
// const s = "23four5six7";
// const result = 234567;

// case3
// const s = "2three45sixseven";
// const result = 234567;

// case4
// const s = "123";
// const result = 123;

console.log(solution(s));
console.log(result);
