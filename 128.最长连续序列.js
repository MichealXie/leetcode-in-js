/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) return 0

  const set = new Set(nums)
  let longest = 1

  for (let i = 0;i < nums.length;i++) {
    let num = nums[i] + 1
    let cur = 1
    while (set.has(num)) {
      cur++
      num++
    }
    longest = Math.max(cur, longest)
  }

  return longest
};
// @lc code=end


console.log(
longestConsecutive([100,4,200,1,3,2])
)