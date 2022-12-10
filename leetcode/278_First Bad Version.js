/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let current = n;
    while (start < current) {
      let mid = start + Math.floor((current - start) / 2);
      if (isBadVersion(mid)) {
        current = mid;
      } else {
        start = mid + 1;
      }
    }
    return current;
  };
};
