/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let debounceTime = null;
  let debounceId = null;

  return function (...args) {
    const currentTime = new Date().getTime();
    if (debounceTime && debounceTime + t >= currentTime) {
      clearTimeout(debounceId);
    }
    debounceTime = currentTime;
    debounceId = setTimeout(() => fn(...args), t);
  };
};

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 *
 * 시간을 따져가며 clearTimeout을 할 필요가 없다.
 * 이미 실행된건 clearTimeout을 해도 이미 실행된거고, 실행 예정인건 취소된다.
 */
var debounce = function (fn, t) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
