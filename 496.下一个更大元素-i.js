/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = []
  // 也就不重复, 而且需求是两个数组的对应数字能这么做了
  // 对应 index 应该也能行
  const map = {}

  for(let i = nums2.length - 1;i >= 0;i--) {
    while(stack.length && nums2[stack[stack.length - 1]] < nums2[i]) {
      stack.pop()
    }

    map[nums2[i]] =  typeof stack[stack.length - 1] === 'number' ? nums2[stack[stack.length - 1]] : -1
    stack.push(i)
  }


  return nums1.map(num => map[num] ? map[num] : -1)
};
// @lc code=end


nextGreaterElement([4,1,2], [1,3,4,2])