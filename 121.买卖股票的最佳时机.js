/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 暴力解
  // let max = 0
  // for (let i = 0;i < prices.length;i++) {
  //   for (let j = i; j < prices.length;j++) {
  //     if (prices[j] > prices[i]) {
  //       max = Math.max(max, prices[j] - prices[i])
  //     }
  //   }
  // }
  // return max

  // dp
  // 第一天是没有股票, 所以有股票的值取负无穷
  if (!prices.length) return 0
  const dp = []
  dp[-1] = [0, -Infinity]

  for (let i = 0; i < prices.length; i++) {
    dp[i] = []
    // 有股票
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]) // 这个 -prices[i] 是因为只能卖一次
    // 没股票
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  }

  return dp[prices.length - 1][0]
};
// @lc code=end

console.log(maxProfit([1,2]))