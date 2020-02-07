/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 递归
  // if (!root) return null

  // if (root.val === val) {
  //   return root
  // } else if (root.val > val) {
  //   return searchBST(root.left, val)
  // } else {
  //   return searchBST(root.right, val)
  // }

  // 遍历
  let node = root
  while (node) {
    if (node.val === val) {
      return node
    } else if (node.val > val) {
      node = node.left
    } else {
      node = node.right
    }
  }

  return null
};
// @lc code=end

