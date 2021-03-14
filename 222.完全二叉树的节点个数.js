/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  // 遍历, 复杂度 O(n)
  // if (!root) return 0
  // let count = 0

  // function dfs(node) {
  //   if (node.left) dfs(node.left)
  //   if (node.right) dfs(node.right)

  //   count += 1
  // }

  // dfs(root)

  // return count

  // 利用特性
  if (!root) return 0

  let leftHeight = 0
  let node = root
  while(node.left) {
    leftHeight += 1
    node = node.left
  }

  let rightHeight = 0
  node = root
  while(node.right) {
    rightHeight += 1
    node = node.right
  }

  if (leftHeight === rightHeight) {
    return 2 * Math.pow(2, leftHeight) - 1
  }

  return 1 + countNodes(root.left) + countNodes(root.right)
};
// @lc code=end

