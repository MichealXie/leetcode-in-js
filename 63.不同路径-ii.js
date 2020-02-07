/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) return 0

  // 翻转矩阵
  for (let index = 0; index < obstacleGrid.length; index++) {
    obstacleGrid[index] = obstacleGrid[index].map(i => {
      if (i === 1) return 0
      return 1
    })
  }

  // 这里有个很 tricky 的操作是把第一列与第一行格式化
  // 其他行都通过第一列跟第一行来计算得出
  // 第一个障碍物(0)后面的格子都是 0
  // 然后下面我们开始计算时, 就可以从 1,1 开始
  for (let i = 1; i < obstacleGrid.length; i++) {
    // 自己可以走, 但上一个不能走, 那自己就要变得不能走
    if ((obstacleGrid[i][0] === 1) && (obstacleGrid[i - 1][0] === 0)) {
      obstacleGrid[i][0] = 0
    }
  }

  for (let i = 1; i < obstacleGrid[0].length; i++) {
    // 自己可以走, 但上一个不能走, 那自己就要变得不能走
    if ((obstacleGrid[0][i] === 1) && (obstacleGrid[0][i - 1] === 0)) {
      obstacleGrid[0][i] = 0
    }
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      // 记住 0 的地方不能走
      if (obstacleGrid[i][j] === 0) continue
      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
    }
  }

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};
// @lc code=end
console.log(
  uniquePathsWithObstacles([
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0]
  ])
)