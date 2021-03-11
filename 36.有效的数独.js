/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const line = Array(9).fill(null).map(() => new Set())
  const column = Array(9).fill(null).map(() => new Set())
  const box = Array(9).fill(null).map(() => new Set())

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j]
      if (num === '.') continue
      const oldLineLength = line[i].size
      line[i].add(num)
      if (oldLineLength === line[i].size) {
        return false
      }

      const oldColumnLength = column[j].size
      column[j].add(num)
      if (oldColumnLength === column[j].size) {
        return false
      }

      const boxIndex = Math.floor(j / 3) + Math.floor(i / 3) * 3
      const oldBoxLength = box[boxIndex].size
      box[boxIndex].add(num)
      if (oldBoxLength === box[boxIndex].size) {
        return false
      }
    }
  }

  return true
}
// @lc code=end

const toTest = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
]
console.log(isValidSudoku(toTest))
