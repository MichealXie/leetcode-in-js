/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 排序才能用 nums[i] === nums[i - 1] 判断剪枝
  nums = nums.sort((a, b) => a - b)
  const result = []
  const used = Array(nums.length).fill(false)
  helper([], 0)
  console.log(result)
  return result

  function helper(cur, len) {
    if (len === nums.length) {
      result.push([...cur])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (nums[i] === nums[i - 1] && used[i - 1]) continue

      cur.push(nums[i])
      used[i] = true
      helper(cur, len + 1)
      cur.pop()
      used[i] = false
    }
  }
};

// @lc code=end


permuteUnique([-1, 2, -1, 2, 1, -1, 2, 1])
