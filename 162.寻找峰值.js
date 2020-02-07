/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    mid = Math.round(start + (end - start) / 2)
    // 左右都小, 即为峰值
    if ((nums[mid - 1] < nums[mid]) && (nums[mid + 1] < nums[mid])) {
      return mid
      // 左小右大, 向右走
    } else if ((nums[mid - 1] < nums[mid]) && (nums[mid + 1] > nums[mid])) {
      start = mid
    } else {
      end = mid
    }
  }

  // 因为到了边界, 边界左边 -∞
  if (nums[start] > nums[start + 1]) {
    return start
  }

  return end
};
// @lc code=end
