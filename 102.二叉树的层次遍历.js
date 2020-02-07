/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 递归
  // const result = []
  // let level = 0

  // function helper(node, level) {
  //   if (!node) return

  //   if (!result[level]) result[level] = []
  //   result[level].push(node.val)

  //   helper(node.left, level + 1)
  //   helper(node.right, level + 1)
  // }

  // helper(root, level)

  // return result

  // 遍历
  if (!root) return []
  const queue = [{
    node: root,
    level: 0,
  }]
  const result = []


  while (queue.length) {
    const cur = queue.shift()

    if (!result[cur.level]) result[cur.level] = []
    if(cur.node.val !== undefined) result[cur.level].push(cur.node.val)

    if (cur.node.left) queue.push({
      node: cur.node.left,
      level: cur.level + 1
    })
    if (cur.node.right) queue.push({
      node: cur.node.right,
      level: cur.level + 1
    })
  }

  return result
};
// @lc code=end

