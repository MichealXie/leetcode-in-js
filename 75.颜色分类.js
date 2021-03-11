/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  let zero = 0
  let two = nums.length - 1
  // [0, zero)
  // [zero, one)
  // [two, len - 1]
  let one = 0
  // 为什么是小于等于?
  // 等于的时候 zero -> one 的 one 是开区间
  while(one <= two) {
    const num = nums[one]
    switch (num) {
      case 0:
        swap(nums, one, zero)
        zero++
        one++
        break;
      case 1: 
        one++
        break
      case 2:
        swap(nums, one, two)
        // 这里 one 不需要++
        // 因为换过来的数字还需要再确认
        two--
    }
  }
  // console.log(nums)
};
// @lc code=end


sortColors([2,0])