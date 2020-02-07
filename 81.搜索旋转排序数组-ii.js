/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  // 为什么不能二分?
  // 因为可能极限重复下, s/ t/ e 有可能全部相同
  for (let i = 0; i < nums.length;i++) {
    if (nums[i] === target) {
      return true
    }
  }
    
  return false
};
// @lc code=end

