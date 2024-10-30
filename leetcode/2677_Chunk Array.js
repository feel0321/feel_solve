/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const temp = [];
    for (let i2 = 0; i2 < size; i2++) {
      const index = i + i2;
      if (index < arr.length) {
        temp.push(arr[index]);
      }
    }
    result.push(temp);
  }

  return result;
};
