/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for(let i = 0; i < nums.length; i++) {
    map[nums[i]] = i
  }
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const restNum = target - num
    const targerIndex = map[restNum]

    if (targerIndex !== undefined && targerIndex !== i) return [targerIndex, i]
  }

  throw new Error('please check arguments')
};
// @lc code=end


console.log(twoSum([3, 2, 4], 6))
