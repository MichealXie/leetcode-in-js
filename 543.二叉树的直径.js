/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0
  function getMaxDiameter(node) {
    if (!node) return 0
    const leftMax = getMaxDiameter(node.left)
    const rightMax = getMaxDiameter(node.right)
    maxDiameter = Math.max(maxDiameter, leftMax + rightMax)

    return Math.max(leftMax, rightMax) + 1
  }

  getMaxDiameter(root)

  return maxDiameter
};
// @lc code=end

