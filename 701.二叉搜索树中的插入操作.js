/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val)

  // 自己试了一下, 二叉搜索树的插入一定能在子节点
  function helper(node) {
    while (node) {
      if (!node.left && node.val > val) {
        node.left = new TreeNode(val)
        return
      }
      if (!node.right && node.val < val) {
        node.right = new TreeNode(val)
        return
      }

      if (val > node.val) {
        node = node.right
      } else {
        node = node.left
      }
    }
  }

  helper(root)
  return root
};
// @lc code=end

