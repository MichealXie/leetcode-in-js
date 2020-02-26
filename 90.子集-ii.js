/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const result = []
  helper([], 0)
  return result

  function helper(cur, len) {
    result.push([...cur])

    for (let i = len; i < nums.length; i++) {
      // i > len ? 因为至少要保证每个 i 都会被用到一次
      if (i > len && nums[i] === nums[i - 1]) continue
      cur.push(nums[i])
      helper(cur, i + 1)
      cur.pop()
    }
  }
};


// console.log(
//   subsetsWithDup([1, 2, 2])
// )
