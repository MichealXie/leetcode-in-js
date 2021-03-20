/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 先分左右, 再判断是否在线性区间, 注意内部判断有等于号
  if (!nums.length) return -1 
  let start = 0
  let end = nums.length - 1
  let mid

  while(start < end - 1) {
    mid = Math.round(start + (end - start) / 2)
    if (target === nums[mid]) return mid
    // 左边
    if (nums[mid] > nums[start]) {
      if (target >= nums[start] && nums[mid] >= target) {
        end = mid
      } else {
        start = mid
      }
    // 右边
    } else {
      if (target <= nums[end] && target >= nums[mid]) {
        start = mid
      } else {
        end = mid
      }
    }
  }

  if (nums[start] === target) return start
  if (nums[end] === target) return end

  return -1
};
// @lc code=end

