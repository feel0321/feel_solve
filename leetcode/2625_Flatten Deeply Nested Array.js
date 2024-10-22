/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  return myFlat(arr, n);
};

function myFlat(arr, depth) {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element) && depth > 0) {
      result.push(...myFlat(element, depth - 1));
    } else {
      result.push(element);
    }
  }

  return result;
}
