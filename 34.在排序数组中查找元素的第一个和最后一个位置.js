/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let middle

    while (start + 1 < end) {
      middle = Math.round(start + (end - start) / 2)
      if (nums[middle] === target) {
        let left = middle
        while (nums[left] === target) {
          left--
        }

        let right = middle
        while (nums[right] === target) {
          right++
        }

        return [left + 1, right - 1]
      } else if (nums[middle] > target) {
        end = middle
      } else {
        start = middle
      }
    }

    let result= [-1, -1]
    if (nums[start] === target) {
      result = [start, start]
    }

    if (nums[end] === target) {
      if (result[0] === -1) {
        result[0] = end
      }
      result[1] = end
    }
    return result
};
// @lc code=end
// let s = searchRange([5, 7, 7, 8, 8, 10], 5)
// console.log(s)