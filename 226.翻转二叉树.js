/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // 第一次
  // if (!root) return root

  // const temp = root.left
  // root.left = root.right
  // root.right = temp
  // invertTree(root.left)
  // invertTree(root.right)
  // return root

  // 第二次
  if (!root) return root
  invertTree(root.left)
  invertTree(root.right)
  const temp = root.left
  root.left = root.right
  root.right = temp

  return root
};
// @lc code=end

