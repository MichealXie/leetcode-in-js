/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  // 太难, 放弃了, 考到了也做不出来
  const buckets = Array(k).fill(() => [])
  const target = (nums.reduce((cur,acc) => {
    acc += cur
    return acc
  })) / k

  function backTrace(cur, start, bucketIndex) {
    if (cur.reduce((cur,acc) => {
      acc += cur
      return acc
    },0) === target) {
      buckets[bucketIndex].push([...cur])
      return true
    }

    for(let i = start; i < nums.length; i++) {
      cur.push(nums[i])
      if (backTrace(cur, i + 1, bucketIndex)) {
        return true
      }
      cur.pop()
    }

    return false
  }

  return backTrace([],0, 0)
};
// @lc code=end

