/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  // 递归
  // const result = []

  // function traversal(node, result) {
  //   if (node === null || node === undefined || node.val === undefined) {
  //     return
  //   }

  //   traversal(node.left, result)
  //   result.push(node.val)
  //   traversal(node.right, result)
  // }

  // traversal(root, result)

  // return result

  // 遍历
  // const stack = []
  // const result = []
  // let node = root

  // while (stack.length || node) {
  //   // 取出所有的左节点
  //   // 这里要注意完全没左节点, 只有右节点, 右节点还有左节点的情况
  //   if (node) {
  //     stack.push(node)
  //     node = node.left
  //   } else {
  //     // 没有 node 就取新的, 同时把右边的也算进去
  //     node = stack.pop()
  //     result.push(node.val)
  //     // 这里是个坑...
  //     node = node.right
  //   }
  // }

  // return result

  // 颜色标记
  const stack = [{
    visited: false,
    node:root
  }]
  const result = []

  while (stack.length) {
    const cur = stack.pop()
    // 注意这行...
    if (!cur.node) continue

    if (!cur.visited) {
      stack.push({
        visited: false,
        node: cur.node.right
      })
      stack.push({
        visited: true,
        node: cur.node
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

