/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.filter(i => i <= target).sort((a, b) => a - b)
  const result = []
  const used = Array(candidates.length).fill(false)
  dfs([], 0)
  return result

  function dfs(cur, start) {
    if (target < 0) return
    if (target === 0) {
      result.push([...cur])
      return
    }

    for(let i = start;i < candidates.length; i++) {
      if (used[i]) continue
      // 保证每个元素都至少能被选一次且后续的重复元素跳过
      if (i > start && candidates[i] === candidates[i - 1]) continue

      target -= candidates[i]
      used[i] = true
      cur.push(candidates[i])
      dfs(cur, i + 1)
      target += candidates[i]
      used[i] = false
      cur.pop()
    }
  }
};
// @lc code=end


console.log(
combinationSum2([10,1,2,7,6,1,5],8,)

)