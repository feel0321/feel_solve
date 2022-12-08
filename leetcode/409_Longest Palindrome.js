/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const countInfo = {};
  let answer = 0;
  let odds = [];

  for (const char of s) {
    countInfo[char] = (countInfo[char] || 0) + 1;
  }
  for (const char in countInfo) {
    if (countInfo[char] % 2 == 1) {
      odds.push(countInfo[char]);
    } else {
      answer += countInfo[char];
    }
  }

  if (odds.length == 0) {
    return answer;
  }

  if (Math.max(odds) == 1) return answer + 1;

  for (const odd of odds) {
    if (odd == 1) continue;
    answer += odd - 1;
  }
  return answer + 1;
};
