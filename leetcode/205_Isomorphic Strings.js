/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return check(s, t) && check(t, s);
};

function check(string1, string2) {
  const info = {};

  for (let i = 0; i < string1.length; i++) {
    const char = string1[i];
    const targetChar = string2[i];

    if (!info[char]) {
      info[char] = targetChar;
    }
    if (info[char] != targetChar) {
      return false;
    }
  }

  return true;
}
