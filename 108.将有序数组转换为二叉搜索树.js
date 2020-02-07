/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null

  const mid = Math.floor(nums.length / 2)
  const treeNode = new TreeNode(nums[mid])

  // slice 是左闭右开
  treeNode.left = sortedArrayToBST(nums.slice(0, mid))
  // 注意这里的加 1
  treeNode.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))

  return treeNode
};
// @lc code=end

