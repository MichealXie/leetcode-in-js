/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 初始化很重要...
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        // 拿与不拿
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

coinChange([1, 2, 5, 11], 11)
coinChange([2], 3)
