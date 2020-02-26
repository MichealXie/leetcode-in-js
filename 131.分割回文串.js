/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  function isPalindrome(str) {
    let start = 0
    let end = str.length - 1
    while(start < end) {
      if (str[start] !== str[end]) return false

      start++
      end--
    }

    return true
  }
  const result = []
  dfs([], 0)
  return result

  function dfs(cur, start) {
    if (cur.join('').length === s.length) {
      result.push([...cur])
      return
    } 

    for(let i = start; i < s.length;i++) {
      const curStr = s.slice(start, i + 1)
      if (isPalindrome(curStr)) {
        cur.push(curStr)
        dfs(cur, i + 1)
        cur.pop()
      }
    }
  }
};
// @lc code=end


console.log(
partition('abqwerj')
)