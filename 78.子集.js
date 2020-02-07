/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  function subsetsHelper(nums, result, position, baseArray) {
    for (let i = position; i < nums.length; i++) {
      let newBaseArray = baseArray.concat(nums[i])
      result.push(newBaseArray)
      subsetsHelper(nums, result, i + 1, newBaseArray)
    }
  }

  const result = [[]]

  subsetsHelper(nums, result, 0, [])

  return result
};

const subset = subsets([1,2,3])
console.log(subset)