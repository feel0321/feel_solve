/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let num = 2; num <= n - 2; num++) {
    const str = num.toString(num);
    if (str !== str.split("").reverse().join("")) {
      return false;
    }
  }

  return true;
};
