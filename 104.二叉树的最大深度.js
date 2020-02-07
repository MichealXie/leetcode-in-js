/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // if (!root) {
  //   return 0
  // }

  // let leftMax = maxDepth(root.left)
  // let rightMax = maxDepth(root.right)

  // return Math.max(leftMax, rightMax) + 1

  if (!root) return 0
  let leftMax = maxDepth(root.left)
  let rightMax = maxDepth(root.right)

  return Math.max(leftMax, rightMax) + 1
}
// @lc code=end
