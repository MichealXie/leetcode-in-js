/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class Stack {
    s = []
    push(index) {
      // 在这里维护单调递减
      while (this.s.length && nums[this.s[this.s.length - 1]] <= nums[index]) {
        this.s.pop()
      }
      this.s.push(index)
    }
  }
  const res = []
  const stack = new Stack()
  for (let i = 0; i < k; i++) {
    stack.push(i)
  }
  // 这里需要放入第一个最大值.
  res.push(nums[stack.s[0]])
  for (let i = k; i < nums.length; i++) {
    // 因为需要获得滑动的距离, 所以 stack 存放必须是 index
    while(stack.s[0] <= i - k) {
      stack.s.shift()
    }
    stack.push(i)
    res.push(nums[stack.s[0]])
  }
  // console.log(res)

  return res
}
// @lc code=end

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
maxSlidingWindow([1], 1)
maxSlidingWindow([1, -1], 1)
maxSlidingWindow([9, 11], 2)
maxSlidingWindow([4, -2], 2)
maxSlidingWindow([7, 2, 4], 2)
