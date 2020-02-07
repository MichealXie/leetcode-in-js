/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 比较简单的做法
  // let max = 0
  // for (let i = 0;i < nums.length;i++) {
  //   // 比如当前是11, 但之前能跳的最远是 10, 那么肯定达不到终点
  //   if (i > max) return false
  //   // 更新最远距离
  //   max = Math.max(max, i + nums[i])
  // }
  // return true

  // 自底向上动态规划
  // let last = nums.length -1 
  // for (let i = nums.length - 2;i >= 0;i--) {
  //   // 注意这个等于号, 相等也是可以跳的
  //   if (last - i <= nums[i]) last = i
  // }

  // return last === 0

  // 自顶向下动态规划
  let can = [true]
  for (let i = 1; i < nums.length;i++) {
    for (let j = 0; j <= i;j++) {
      if (can[j] && nums[j] + j >= i) {
        can[i] = true
        break
      }
    }
  }

  return can[nums.length - 1] === true
}
// @lc code=end


console.log(canJump([2, 0, 0]))