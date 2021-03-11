/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  function findMaxIndex(arr) {
    if (arr.length === 1) return 0

    let maxIndex = 0

    for(let i = 0; i < arr.length;i++) {
      if (arr[i] > arr[maxIndex]) maxIndex = i
    }

    return maxIndex
  }

  function helper(nums) {
    if (nums.length === 1) return new TreeNode(nums[0])
    if (nums.length < 1) return null

    const maxIndex = findMaxIndex(nums)
    const root = new TreeNode(nums[maxIndex])
    root.left = helper(nums.slice(0, maxIndex))
    root.right = helper(nums.slice(maxIndex + 1, nums.length))
    return root
  }

  return helper(nums)

};
// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))