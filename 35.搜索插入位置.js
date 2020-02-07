/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length -1
    let mid

    while (start + 1 < end) {
      mid = Math.round(start + (end - start) / 2)
      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] > target) {
        end = mid
      } else {
        start = mid
      }
    }

    if (nums[start] >= target) {
      return start
    } else if (nums[end] < target) {
      return end + 1
    } else {
      return end
    }
};
// @lc code=end

