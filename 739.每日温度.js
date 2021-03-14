/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const res = []
  const stack = []
  for(let i = T.length - 1; i >= 0; i --) {
    while(stack.length && T[stack[stack.length - 1]] <= T[i]) {
      stack.pop()
    }

    res[i] = (stack[stack.length - 1] - i) ? (stack[stack.length - 1] - i) : 0

    stack.push(i)
  }

  // console.log(res)
  return res
};
// @lc code=end

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])