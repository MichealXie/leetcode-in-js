/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 自己想的不知道啥方法
    // const diff = []
    // for (let i = 1;i < prices.length;i++) {
    //   diff[i - 1] = prices[i] - prices[i - 1]
    // }

    // let max = 0
    // for(let num of diff) {
    //   if (num > 0) max += num
    // }
    // return max

    // dp
    const dp = []
    dp[-1] = [0, -Infinity]

    for (let i = 0; i < prices.length; i++) {
      dp[i] = []
      // 有股票
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
      // 没股票
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    }
  
    return dp[prices.length - 1][0]
};
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4]))