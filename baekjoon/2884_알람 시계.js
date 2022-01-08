const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [input_hour, input_minute] = line.split(" ");
  const [hour, minute] = solution(Number(input_hour), Number(input_minute));
  console.log(`${hour} ${minute}`);
  rl.close();
}).on("close", function () {
  process.exit();
});

function solution(hour, minute) {
  if (minute >= 45) {
    minute -= 45;
    return [hour, minute];
  }
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
  return [hour, minute];
}
