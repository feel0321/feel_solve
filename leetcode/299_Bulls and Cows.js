/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const info = {};
  let bullCount = 0;
  let cowCount = 0;
  // bull인 경우를 세거나, bull이 아닌 경우를 카운트
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullCount += 1;
    } else if (secret[i] in info) {
      info[secret[i]] += 1;
    } else {
      info[secret[i]] = 1;
    }
  }
  // 카운트된만큼 사용
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] !== guess[i] && info[guess[i]]) {
      cowCount += 1;
      info[guess[i]] -= 1;
    }
  }
  return `${bullCount}A${cowCount}B`;
};
