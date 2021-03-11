/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  // let cur = 1
  // function helper(root, k) {
  //   if (!root) return

  //   let res = helper(root.left, k)
  //   if (res !== undefined) return res
  //   if (k === cur) {
  //     return root.val
  //   }
  //   cur += 1

  //   res = helper(root.right, k)
  //   if (res !== undefined) return res
  // }
  // return helper(root, k)

  const stack = [{
    visited: false,
    node: root,
  }]
  let count = 1

  while(stack.length) {
    const cur = stack.pop()
    // console.log(stack)
    if (!cur) return 0
    if (!cur.node) continue

    if (!cur.visited) {
      stack.push({
        visited: false,
        node: cur.node.right,
      })
      stack.push({
        visited: true,
        node: cur.node,
      })
      stack.push({
        visited: false,
        node: cur.node.left,
      })
    } else {
      if (count === k) {
        return cur.node.val
      }
      count += 1
    }
  }
}
// @lc code=end

console.log(kthSmallest({ val: 1, left: null, right: null }, 1))
