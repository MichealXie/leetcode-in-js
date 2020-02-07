/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result = [0, 1, 2]
  if (n <= result.length - 1) {
    return result[n]
  }

  for(let i = 3;i <= n;i++) {
    result[i] = result[i - 1] + result[i - 2]
  }

  return result[n]
};
// @lc code=end


climbStairs(3)