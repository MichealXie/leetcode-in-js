/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = []

  helper(result, n, [], 0)
  return result

  function helper(result, n, cur, len) {
    if (cur.length === n) {
      result.push([...cur])
      return
    }

    for (let i = 0; i < n; i++) {
      if (!checkIsValid(cur, len, i)) continue

      const line = Array(n).fill('.')
      line[i] = 'Q'
      cur.push(line.join(''))
      helper(result, n, cur, len + 1)
      // 需要撤销么?
      line[i] = '.'
      cur.pop()
    }
  }
  function checkIsValid(cur, row, col) {
    // 检查列
    for (let i = 0; i < row; i++) {
      if (cur[i][col] === 'Q') return false
    }

    // 检查左上
    for (
      let i = row - 1, j = col - 1;
      i >= 0 && j >= 0;
      i-- , j--
    ) {
      // console.log(i, j)
      if (cur[i][j] === 'Q') return false
    }
    // 检查右上
    for (
      let i = row - 1, j = col + 1;
      // 注意 j < n 而不是 < cur.length || < col
      i >= 0 && j < n;
      i-- , j++
    ) {
      if (cur[i][j] === 'Q') return false
    }

    return true
  }
};
// @lc code=end

console.log(
  solveNQueens(4).length
)
