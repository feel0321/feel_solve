/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args)
        .then(resolve)
        .catch(reject);
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
  };
};

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 *
 * Promise.race()를 쓰면 편하다는 팁을 보고 수정한 코드
 */
var timeLimit = function (fn, t) {
  return function (...args) {
    return getPrWithTimeout(() => fn(...args), t);
  };
};

function getPrWithTimeout(fn, limitTime) {
  const timeoutPr = new Promise((resolve, reject) => {
    setTimeout(() => reject("Time Limit Exceeded"), limitTime);
  });

  return Promise.race([fn(), timeoutPr]);
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
