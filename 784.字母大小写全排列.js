/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = []
  dfs([], 0)
  return result

  function dfs(cur, start) {
    if (cur.length === s.length) {
      result.push(cur.join(''))
      return
    }

    for (let i = start; i < s.length; i++) {
      if (isNaN(parseInt(s[i]))) {
        if (s[i].toLowerCase() !== s[i]) {
          cur.push(s[i].toLowerCase())
          dfs(cur, i + 1)
          cur.pop()
        } else {
          cur.push(s[i].toUpperCase())
          dfs(cur, i + 1)
          cur.pop()
        }
      }

      cur.push(s[i])
      dfs(cur, i + 1)
      cur.pop()
    }
  }
};
// @lc code=end

console.log(letterCasePermutation('a1b2'))