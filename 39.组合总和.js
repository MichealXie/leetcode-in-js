/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.filter(num => num <= target).sort((a,b) => a - b)
  const result = []
  let total = 0
  dfs([], 0)
  return result

  function dfs(cur, start) {
    if (total > target) return
    if (total === target) {
      result.push([...cur])
      return
    }

    // 因为不重复, 排序后不会再取比自身小的, 可以剪枝
    for (let i = start; i < candidates.length; i++) {
      cur.push(candidates[i])
      total += candidates[i]
      dfs(cur, i)
      cur.pop()
      total -= candidates[i]
    }
  }
};
// @lc code=end

console.log(

combinationSum([2,3,6,7], 7)
)
