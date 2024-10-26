/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  return process(obj);
};

function process(input) {
  if (!input) return;

  if (Array.isArray(input)) {
    const arr = [];
    for (const value of input) {
      const result = process(value);
      if (result) {
        arr.push(result);
      }
    }

    return arr;
  } else if (typeof input == "object") {
    const obj = {};
    for (const key in input) {
      const result = process(input[key]);
      if (result) {
        obj[key] = result;
      }
    }

    return obj;
  } else {
    return input;
  }
}
