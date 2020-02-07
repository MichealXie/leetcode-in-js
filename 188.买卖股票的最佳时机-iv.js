/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitWithUnlimitedTradeTime(prices) {
  const dp = []
  dp[-1] = [0, -Infinity]

  for (let i = 0; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return dp[prices.length - 1][0]
}
var maxProfit = function (k, prices) {
  const dp = []
  if (k > prices.length / 2) return maxProfitWithUnlimitedTradeTime(prices)

  for (let i = 0; i < prices.length; i++) {
    dp[i] = [[0, -Infinity]]
    for (let j = k; j > 0; j--) {
      dp[i][j] = []
      if (i === 0) {
        dp[i][j][0] = 0
        dp[i][j][1] = -prices[i]
        continue
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }

  return dp[prices.length - 1][k][0]
};
// @lc code=end

console.log( maxProfit(2, [3,3,5,0,0,3,1,4]) )