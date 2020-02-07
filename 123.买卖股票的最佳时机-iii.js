/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0
  let dp = []
  const maxK = 2

  for (let i = 0; i < prices.length; i++) {
    // 注意这个双重数组, 这里是初始化 K
    dp[i] = [[0, -Infinity]]
    // 这里的 k 只有 1 & 2, k[0] 会报错
    for (let k = maxK; k > 0; k--) {
      dp[i][k] = []
      if (i === 0) {
        dp[i][k][0] = 0
        dp[i][k][1] = -prices[i]
        continue
      }

      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      // k = 1时, 为第一次购买, 故 dp[i - 1][0][0] = 0
      // 即上一天从来没买过的状态, 肯定是0元
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }

  return dp[prices.length - 1][maxK][0]
};
// @lc code=end

console.log(maxProfit([7,6,4,3,1]))