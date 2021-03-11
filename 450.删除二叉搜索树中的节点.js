/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root

  function getMin(node) {
    while (node.left) {
      node = node.left
    }

    return node
  }
  if (root.val === key) {
    if (!root.left && !root.right) return null
    if (!root.left) return root.right
    if (!root.right) return root.left

    const minNode = getMin(root.right)
    // 这里也要赋值, 不然会导致无法删除
    root.right = deleteNode(root.right, minNode.val)
    root.val = minNode.val
  } else if (root.val > key) {
    // 巧妙的借助赋值删除节点
    // 不然找到应该删除的节点直接 = null 不会生效
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }

  return root
}
// @lc code=end
