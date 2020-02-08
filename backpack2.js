/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @param V: Given n items with value V[i]
 * @return: The maximum value
 */
const backPackII = function (n, weights, values) {
  // m * n 空间复杂度
  // const m = weights.length // 第 i 个物品
  // const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  // console.log(dp)

  // for (let i = 1; i <= m; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     if (j >= weights[i - 1]) {
  //       // 不选自己, 与选自己
  //       dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]) // 看左边大还是右边大
  //     } else { // 不能放入则选择上一个物品能放下的价值
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
  //     }
  //   }
  // }

  // console.log(dp)
  // return dp[m][n]

  // 2m 复杂度, 滚动数组
  const m = weights.length // 第 i 个物品
  const dp = Array.from(Array(2), () => Array(n + 1).fill(0))
  console.log(dp)

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (j >= weights[i - 1]) {
        // 不选自己, 与选自己
        dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], values[i - 1] + dp[(i - 1) % 2][j - weights[i - 1]]) // 看左边大还是右边大
      } else { // 不能放入则选择上一个物品能放下的价值
        dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1])
      }
    }
  }

  console.log(dp)
  return Math.max(dp[0][n], dp[1][n])
}

// backPackII(10, [2, 3, 5, 7], [1, 5, 2, 4])
console.log(backPackII(5, [5, 3, 4, 2], [60, 50, 70, 30]))