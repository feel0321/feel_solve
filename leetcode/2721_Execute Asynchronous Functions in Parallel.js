/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  const success = new Array(functions.length);
  let successCount = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          success[i] = result;
          successCount++;
          if (successCount === functions.length) {
            resolve(success);
          }
        })
        .catch(reject);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
