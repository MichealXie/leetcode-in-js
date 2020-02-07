/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = m - 1
  let k = n - 1
  let cur = m + n - 1

  while (cur >= 0) {
    if (nums2[k] === undefined) return
    if (nums1[j] > nums2[k]) {
      nums1[cur] = nums1[j]
      j--
    } else {
      nums1[cur] = nums2[k]
      k--
    }
    cur--
  }
};
// merge(
//   [-1,-1,0,0,0,0],
//   4,
//   [-1,0],
//   2
// )
// @lc code=end

