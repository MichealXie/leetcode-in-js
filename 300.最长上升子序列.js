/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0
  // dp 是指以 i 结尾的 LIS 长度
  // 一般会觉得是 nums(0, i) 的 LTS 长度
  const dp = nums.map(() => (1))

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
};
// @lc code=end

console.log(lengthOfLIS([]))
