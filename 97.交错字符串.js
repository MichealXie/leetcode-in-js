/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length
  const n = s2.length
  const k = s3.length
  if (m + n !== k) return false

  // dp[i][j] 指 s1 的前 i 个 字符 + s2 的前 j 个字符
  // 能否与 s3 的 前 i + j 个字符组成交错字符串
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(false))
  // s1 的前 i 个字符必须跟 s3 前 i 个字符一样才能是 true
  for (let i = 0; i <= m; i++) {
    if (s1.slice(0, i) === s3.slice(0, i)) {
      dp[i][0] = true
    }
  }
  for (let j = 0; j <= n; j++) {
    if (s2.slice(0, j) === s3.slice(0, j)) {
      dp[0][j] = true
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 当相等就看左边位置的是否能组成交错字符串
      if (s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j]
      }
      if (s2[j - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1]
      }
    }
  }

  return dp[m][n]
};
// @lc code=end

isInterleave("aabcc","dbbca", "aadbbbaccc")
