/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length
  let n = text2.length
  let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
  console.log(dp)

  for (let i = 1; i <= m; i++) {
    dp[i] = [0]
    for (let j = 1; j <= n; j++) {
      // 这个－1 很关键
      // 对比只需要用 0~n-1 对比, 记录却可以用 1~n
      if (text2[j - 1] === text1[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  console.log(dp)
  return dp[m][n]
};

console.log(
  longestCommonSubsequence("abcde", "ace")
)