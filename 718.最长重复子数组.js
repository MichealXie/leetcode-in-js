/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  const m = A.length
  const n = B.length
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  let max = 0

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max
};
// @lc code=end

findLength([0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1])
findLength([1,2,3,2,1],[3,2,1,4,7])