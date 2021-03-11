/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const used = Array(nums.length).fill(false)
  return helper([], used)

  function helper(cur, used) {
    if (cur.length === nums.length) {
      result.push([...cur])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue

      used[i] = true
      cur.push(nums[i])
      // 当 i = 2时, 进入 helper, 出来后 2 的 used 又变 false 了, 然后就是 [1, 3, 2]
      helper(cur, used)
      used[i] = false
      cur.pop()
    }

    return result
  }
};

// @lc code=end


console.log(permute([1, 2, 3]))