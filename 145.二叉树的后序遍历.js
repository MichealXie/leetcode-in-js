/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  // 递归
  // const result = []

  // function traversal(node, result) {
  //   if (node === null || node === undefined || node.val === undefined) {
  //     return
  //   }


  //   traversal(node.left, result)
  //   traversal(node.right, result)
  //   result.push(node.val)
  // }

  // traversal(root, result)

  // return result
    
  // 标记
  const stack = [{
    visited: false,
    node: root,
  }]
  const result = []

  while (stack.length) {
    const cur = stack.pop()
    if (!cur.node) continue

    if (!cur.visited) {
      stack.push({
        visited: true,
        node: cur.node
      })
      stack.push({
        visited: false,
        node: cur.node.right
      })
      stack.push({
        visited: false,
        node: cur.node.left
      })
    } else {
      result.push(cur.node.val)
    }
  }

  return result
};
// @lc code=end

