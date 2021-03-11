/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid = 0

  while(start < end - 1) {
    mid = Math.floor(start + (end - start) / 2)
    const midNum = nums[mid]
    if (midNum === target) {
      return mid
    } else if (midNum > target) {
      end = mid
    } else {
      start = mid
    }
  }

  if (nums[start] === target) return start
  if (nums[end] === target) return end

  return -1
};
// @lc code=end

