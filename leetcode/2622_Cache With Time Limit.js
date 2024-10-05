var TimeLimitedCache = function () {
  this.valueInfo = {};
  this.setTimeoutIdInfo = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.setTimeoutIdInfo[key]) {
    clearTimeout(this.setTimeoutIdInfo[key]);
  }
  const result = key in this.valueInfo;
  this.valueInfo[key] = value;
  this.setTimeoutIdInfo[key] = setTimeout(() => {
    delete this.valueInfo[key];
  }, duration);

  return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return key in this.valueInfo ? this.valueInfo[key] : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.valueInfo).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
