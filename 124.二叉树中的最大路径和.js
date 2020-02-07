/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
// 这种做法太难记了, 不想记
// function calculate(node) {
//   if (node === null) return {
//     singlePath: 0,
//     max: -Infinity,
//   }

//   const left = calculate(node.left)
//   const right = calculate(node.right)

//   // singlePath 是单边最大值, 故为 左右选个大的加本身值, 可不取, 给0, 不会跟 root 合并计算
//   let singlePath = Math.max(left.singlePath, right.singlePath) + node.val
//   singlePath = Math.max(0, singlePath)

//   // max 是取单边, 跟 root + 另一边合并
//   const longestPathValue = left.singlePath + right.singlePath + node.val
//   // 单个节点时, 其实 max 就是 node.val
//   const max = Math.max(left.max, right.max, longestPathValue)

//   return {
//     max,
//     singlePath,
//   }
// }

// return calculate(root).max

var maxPathSum = function (root) {
  let max = -Infinity

  function getMax(node) {
    if (!node) return 0

    // 小于 0 直接不要
    const left = Math.max(0, getMax(node.left))
    const right = Math.max(0, getMax(node.right))

    // 每次都收集比以前大的, 这个是单个节点的最大
    max = Math.max(max, left + right + node.val)
    // 单条路径的最大
    return node.val + Math.max(left, right)
  }

  getMax(root)
  return max
};
// @lc code=end

