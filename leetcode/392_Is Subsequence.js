/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const tArray = t.split("");
  let prevIdx = -1;

  for (const char of s) {
    if (!tArray.includes(char)) return false;

    const targetIndex = tArray.findIndex(
      (char2, i) => char2 == char && i > prevIdx
    );
    if (targetIndex == -1) return false;
    prevIdx = targetIndex;
  }
  return true;
};
