/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const steps = [0]
  for (let i = 1; i < nums.length;i++) {
    steps[i] = null
    for (let j = 0;j < i;j++) {
      // 假如 steps[j] 为 null, 意味着不能调到 j, 就不算了
      if (steps[j] !== null && j + nums[j] >= i) { // 注意这个等于号
        steps[i] = steps[j] + 1
        // 这个 break 很精髓, 因为求最少跳跃次数, 从最远跳过来的次数最少
        break
      }
    }
  }

  return steps[nums.length - 1]
};
// @lc code=end

