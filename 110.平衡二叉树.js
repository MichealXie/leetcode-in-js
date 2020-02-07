/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function maxDepth(node) {
    if (!node) return 0

    let left = maxDepth(node.left)
    let right = maxDepth(node.right)

    // 如果非平衡, 就返回负一, 因为你会扫描每一个节点, 只要有一个是 -1, 上面全是 -1
    if ((Math.abs(left - right) > 1) || (left === -1) || (right === -1)) return -1

    return Math.max(left, right) + 1
  }

  if (!root) return true

  return maxDepth(root) !== -1
}
// @lc code=end
