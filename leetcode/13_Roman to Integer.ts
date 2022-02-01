function romanToInt(s: string): number {
  const translate = {} as { number: string };
  translate[1] = "I";
  translate[4] = "IV";
  translate[5] = "V";
  translate[9] = "IX";
  translate[10] = "X";
  translate[40] = "XL";
  translate[50] = "L";
  translate[90] = "XC";
  translate[100] = "C";
  translate[400] = "CD";
  translate[500] = "D";
  translate[900] = "CM";
  translate[1000] = "M";

  const arr = Object.entries(translate);
  let answer = 0;

  for (let i = 12; i >= 0; i--) {
    while (s.startsWith(arr[i][1])) {
      s = s.slice(arr[i][1].length);
      answer += Number(arr[i][0]);
    }
  }
  return answer;
}
