/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  if (!root) return 0
  const leftMin = minDepth(root.left)
  const rightMin = minDepth(root.right)

  // 与最大(104)的不同就在这里, 当只有一个子节点时, 最小不能是0, 而是另外一个节点
  if (!root.left || !root.right) {
    return leftMin + rightMin + 1
  }

  return Math.min(leftMin, rightMin) + 1
};
// @lc code=end

