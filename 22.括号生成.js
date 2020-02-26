/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let left = n
  let right = n
  const result = []

  dfs('', 0)
  return result

  function dfs(cur) {
    if (left ===  0 &&  right === 0) {
      result.push(cur)
    }

    if (left > right) return
    
    if (left > 0) {
      left -= 1
      dfs(cur+'(')
      left += 1
    }
    if (right > 0) {
      right -= 1
      dfs(cur+')')
      right += 1
    }
  }
};
// @lc code=end


console.log(

generateParenthesis(3)
)