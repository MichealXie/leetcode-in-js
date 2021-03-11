/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  /**
   * @param {TreeNode} node
   * @param {number} target
   */
  function dfs(node, target) {
    if (!node) return false

    const rest = target - node.val
    if (rest === 0 && (!node.right && !node.left)) {
      return true
    } else {
      return dfs(node.left, rest) || dfs(node.right, rest)
    }
  }

  return dfs(root, targetSum)
};
// @lc code=end

