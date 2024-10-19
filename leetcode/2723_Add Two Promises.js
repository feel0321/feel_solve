/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const result = await Promise.all([promise1, promise2]);
  return result.reduce((acc, num) => acc + num, 0);
};

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 *
 * async가 금지인 우리 회사 방식대로 한다면 이렇게
 * 근데 위에 방법이 70ms, 이 방법이 55ms 정도로 좀 더 빠르다?
 */
var addTwoPromises = function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((result) => {
    return result.reduce((acc, num) => acc + num, 0);
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
