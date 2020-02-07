/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = []
    dp[-1] = [0, -Infinity]
    dp[-2] = [0, -Infinity]

    for (let i = 0; i < prices.length;i++) {
      dp[i] = []
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]) // 买的时候, 要加一天冷冻期
    }

    return dp[prices.length - 1][0]
};
// @lc code=end

