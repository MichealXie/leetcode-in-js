/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1
    let mid

    while(start < (end - 1)) {
      mid = Math.round((start + end) / 2)

      if (nums[mid] < nums[end]) {
        end = mid 
      } else {
        start = mid
      }
    }

    if (nums[end] > nums[start]) {
      return nums[start]
    } else {
      return nums[end]
    }
};
// @lc code=end

