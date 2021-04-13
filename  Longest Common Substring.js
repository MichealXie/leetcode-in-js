/**
 * @param A: A string
 * @param B: A string
 * @return: the length of the longest common substring.
 */
const longestCommonSubstring = function (A, B) {
  if (!A || !B) return 0
  const m = A.length
  const n = B.length
  let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
  let max = 0
  
  for (let i = 1;i <=m;i++) {
      for (let j = 1;j <=n;j++) {
          if (A[i - 1] === B[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1
              max = Math.max(dp[i][j], max)
          } else {
              dp[i][j] = 0
          }
      }
  }
  
  return max
}

console.log(longestCommonSubstring('abc','abssdc'))