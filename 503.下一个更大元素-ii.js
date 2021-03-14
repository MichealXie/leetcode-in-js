/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const circleNums = [...nums, ...nums]
  const res = Array(nums.length)
  const stack = []

  // fixme: 为什么是 >=0?
  // for 循环的最后一项是循环后执行...
  for(let i = circleNums.length - 1; i >= 0; i--) {
    while(stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop()
    }

    res[i % nums.length] = typeof stack[stack.length - 1] === 'number' ? stack[stack.length - 1] : -1
    stack.push(circleNums[i])
  }

  // console.log(res)
  return res
};
// @lc code=end


nextGreaterElements([1,2,1])