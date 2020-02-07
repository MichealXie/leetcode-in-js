/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  let lastNum = -Infinity

  function helper(node) {
    if (!node) return true

    const left = helper(node.left)
    if (lastNum < node.val) {
      lastNum = node.val
    } else {
      return false
    }
    const right = helper(node.right)

    return left && right
  }

  return helper(root)
};
// @lc code=end

