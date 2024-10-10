/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (fn(val, i)) {
      result.push(val);
    }
  }

  return result;
};
