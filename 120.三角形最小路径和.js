/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 普通递归 +  记忆
  // 重复计算, 搞个额外空间
  // const mem = []

  // function getMin(x, y) {
  //   if (triangle[y] === undefined || triangle[y][x] === undefined) return 0

  //   if (mem[y] === undefined) {
  //     mem[y] = []
  //   }

  //   if (mem[y][x] === undefined) {
  //     mem[y][x] = Math.min(getMin(x, y + 1), getMin(x + 1, y + 1)) + triangle[y][x]
  //   }

  //   return mem[y][x]
  // }

  // const res = getMin(0, 0)
  // return res 

  // 自底向上的动态规划
  // let dp = []
  // // 先复制了一个 triangle
  // for (let index = 0; index < triangle.length; index++) {
  //   dp[index] = [...triangle[index]]
  // }

  // for (let i = triangle.length - 2; i >= 0; i--) {
  //   for ( let j = 0; j < triangle[i].length;j++) {
  //     dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
  //   }
  // }

  // return dp[0][0]

  // 自顶向下的动态规划
  let dp = []
  // 先复制了一个 triangle
  for (let index = 0; index < triangle.length; index++) {
    dp[index] = [...triangle[index]]
  }

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 这些边界真的很恶心
      if (dp[i - 1][j - 1] === undefined) {
        target = dp[i - 1][j]
      } else if (dp[i - 1][j] === undefined) {
        target = dp[i - 1][j - 1]
      } else {
        target = Math.min(dp[i - 1][j], dp[i - 1][j - 1])
      }

      dp[i][j] = target + triangle[i][j]
    }
  }

  return Math.min(...dp[dp.length - 1])
};


minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])