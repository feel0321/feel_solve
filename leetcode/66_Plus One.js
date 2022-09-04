/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const lastIndex = digits.length - 1;

  digits[lastIndex] += 1;
  if (digits[lastIndex] === 10) {
    for (let i = lastIndex; i > 0; i--) {
      if (digits[i] === 10) {
        digits[i] = 0;
        digits[i - 1] += 1;
        continue;
      }
      break;
    }

    if (digits[0] === 10) {
      digits[0] = 0;
      digits.unshift(1);
    }
  }
  return digits;
};
