/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // function subsetsHelper(nums, result, position, baseArray) {
  //   for (let i = position; i < nums.length; i++) {
  //     let newBaseArray = baseArray.concat(nums[i])
  //     result.push(newBaseArray)
  //     subsetsHelper(nums, result, i + 1, newBaseArray)
  //   }
  // }

  // const result = [[]]

  // subsetsHelper(nums, result, 0, [])

  // return result

  const result = []

  helper([], 0)

  return result

  function helper(cur, len) {
    result.push([...cur])

    for (let i = len; i < nums.length; i++) {
      cur.push(nums[i])
      // 注意是 i + 1, 写成 len + 1 改了我好久
      helper(cur, i + 1)
      cur.pop()
    }
  }
};

const subset = subsets([1, 2, 3])
console.log(subset)