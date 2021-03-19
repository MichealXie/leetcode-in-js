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
  if (nums.length === 0) return null
  if (nums.length === 1) return new TreeNode(nums[0])

  const maxIndex = nums.indexOf(Math.max(...nums))
  const left = nums.slice(0, maxIndex)
  const right = nums.slice(maxIndex + 1)

  const root = new TreeNode(nums[maxIndex])
  root.left = constructMaximumBinaryTree(left)
  root.right = constructMaximumBinaryTree(right)

  return root
};
// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))