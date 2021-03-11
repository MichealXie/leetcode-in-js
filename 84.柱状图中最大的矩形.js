/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // brute force
  // let max = 0
  // for(let i = 0;i < heights.length;i++) {
  //   let left = i
  //   let right = i
  //   while(heights[left] >= heights[i] && left >= 0) {
  //     left--
  //   }
  //   while(heights[right] >= heights[i] && right < heights.length) {
  //     right++
  //   }

  //   const area = heights[i] * (right - left - 1) // 经验...找几个案例算算得出的公式
  //   if (area > max) max = area
  // }
  // return max
  
  // 单调递增栈
  const stack = []
  heights = [0, ...heights, 0]
  let res = 0

  for (let i = 0; i < heights.length;i++) {
    while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()]
      const width = i - stack[stack.length - 1] - 1
      res = Math.max(res, height * width)
    }
    stack.push(i)
  }
  return res
};
// @lc code=end


console.log(largestRectangleArea([2,1,5,6,2,3]))