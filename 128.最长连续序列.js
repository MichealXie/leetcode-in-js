/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // if (!nums.length) return 0

  // const set = new Set(nums)
  // let longest = 1

  // for (let i = 0;i < nums.length;i++) {
  //   let num = nums[i] + 1
  //   let cur = 1
  //   while (set.has(num)) {
  //     cur++
  //     num++
  //   }
  //   longest = Math.max(cur, longest)
  // }

  // return longest

  // if (!nums.length) return 0
  const set = new Set(nums)
  let max = 0
  for(num of nums) {
    let last = num - 1
    let count = 1
    while(set.has(last)) {
      count++
      last--
    }
    max = Math.max(count, max)
  }
  return max
};
// @lc code=end


console.log(
longestConsecutive([0, 0, -1])
)