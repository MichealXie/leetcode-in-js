/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  dfs([], 1)
  return result

  function dfs(cur, start) {
    if (cur.length === k) {
      result.push([...cur])
      return
    }

    // 剪不了多少...
    // i <= n 也够了
    for (let i = start; i <= n - (k - cur.length) + 1; i++) {
      cur.push(i)
      dfs(cur, i + 1)
      cur.pop()
    }
  }
};
// @lc code=end


console.log(
  combine(4, 2)

)