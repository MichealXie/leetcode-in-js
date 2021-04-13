/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  A = [...A, ...A, ...A]
  const dp = A.map(n => n)

  for (let i = 1;i < A.length;i++) {
    dp[i] = Math.max(dp[i - 1] + A[i], A[i])
  }
  console.log(dp)

  return Math.max(...dp)
};
// @lc code=end


maxSubarraySumCircular([1,-2,3,-2])
maxSubarraySumCircular([5,-3,5])