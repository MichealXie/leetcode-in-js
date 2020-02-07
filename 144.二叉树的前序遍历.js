/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  // 递归
  // const result = []

  // function traversal(node, result) {
  //   if (node === null || node === undefined || node.val === undefined) {
  //     return
  //   }

  //   result.push(node.val)

  //   traversal(node.left, result)
  //   traversal(node.right, result)
  // }

  // traversal(root, result)

  // return result

  // 迭代
  if (!root) return []

  const result = []
  const stack = [root]

  while(stack.length) {
    // 既然叫 stack, 就得后进先出
    const node = stack.pop()
    result.push(node.val)

    // 为什么是右边先? 因为 pop 是删除最后一个元素...
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }

  return result
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const node = new TreeNode(1)
node.left = new TreeNode(4)
node.right = new TreeNode(3)
node.right.right = new TreeNode(2)
preorderTraversal(node)
// @lc code=end

