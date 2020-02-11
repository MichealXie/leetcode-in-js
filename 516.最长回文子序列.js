/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  // 用相反的字符串取巧
  // const m = s.length
  // const reverseS = s.split('').reverse('').join('')
  // const dp = Array.from(Array(m + 1), () => Array(m +1).fill(0))

  // for(let i = 1; i <= m;i++) {
  //   for(let j = 1; j <= m;j++) {
  //     if (s[i - 1] === reverseS[j - 1]) {
  //       dp[i][j] = dp[i - 1][j - 1] + 1
  //     } else {
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
  //     }
  //   }
  // }

  // // console.log(dp)
  // return dp[m][m]

  // 常规 dp
  const m = s.length
  const dp = Array.from(Array(m + 1), () => Array(m +1).fill(0))
  for(let i = 0; i <= m;i++) {
    dp[i][i] = 1
  }

  // console.log(dp)
  for(let i = m - 1; i >= 0;i--) {
    for(let j = i + 1; j <= m;j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  // console.log(dp)

  // console.log(dp)
  return dp[0][m]
};
// @lc code=end


longestPalindromeSubseq('bbbab')