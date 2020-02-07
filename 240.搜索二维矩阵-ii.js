/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length - 1
  let n = 0

  // 从左下角开始搜索
  while(m >= 0 && n <= matrix[0].length - 1) {
    if (matrix[m][n] === target) {
      return true
    } else if (matrix[m][n] > target) {
      m--
    } else {
      n++
    }
  }

  return false
};
// @lc code=end

console.log(
// searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 31)
searchMatrix([[]], 0)
)
