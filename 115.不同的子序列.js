/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let m = s.length
  let n = t.length
  let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  
  for (let i = 0; i <= m;i++) {
    // when j = 0, every i is j's superset
    // 要注意, '' 是 '' 的子集, 故 0,0 是 1
    dp[i][0] = 1 // 空集是所有的子集
  }
  
  for (let i = 1;i <= m; i++) {
    for (let j = 1;j <= n;j++) {
      if (s[i - 1] !== t[j - 1]) {
        // i never show in subset
        // 不等时, s[i] 不可能出现在子集中
        dp[i][j] = dp[i - 1][j]
      } else {
        // i can choose not be or be the subset
        // 当两者相等时, j 可以选择不出现在子集中, 也选择可以出现
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
      }
    }
  }

  return dp[m][n]
};
// @lc code=end


numDistinct("rabbb", "rabb")