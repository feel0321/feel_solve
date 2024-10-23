/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const obj = {};

  for (const element of this) {
    const result = fn(element);
    if (!(result in obj)) {
      obj[result] = [];
    }
    obj[result].push(element);
  }

  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
