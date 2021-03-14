/**
 * @param {number[]} nums1
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1) {
  const res = Array(nums1.length)
  const stack = []

  for(let i = nums1.length - 1;i >= 0;i--) {
    console.log(i)
    while(stack.length && nums1[stack[stack.length - 1]] <= nums1[i]) {
      stack.pop()
    }

    res[i] = typeof stack[stack.length - 1] === 'number' ? nums1[stack[stack.length - 1]] : -1
    stack.push(i)
  }

  console.log(res)

  return res
};
// @lc code=end

nextGreaterElement([4,1,2])