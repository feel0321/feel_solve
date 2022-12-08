/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    const diffMoney = prices[right] - prices[left];
    if (diffMoney > 0) {
      max = Math.max(max, diffMoney);
    } else {
      left = right;
    }
    right += 1;
  }
  return max;
};
