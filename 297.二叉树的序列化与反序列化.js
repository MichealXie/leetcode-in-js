/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = []
    function helper(node) {
      if (!node) {
        res.push('null')
        return
      }
      // 这道题似乎只能用前序
      res.push(node.val)
      helper(node.left)
      helper(node.right)
    }

    helper(root)

    return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = data.split(',')
  function helper(arr) {
    if (!arr.length) return null
    const str = arr.shift()
    if (str === 'null') return null
    // 只能前序...
    const root = new TreeNode(str)
    root.left = helper(arr)
    root.right = helper(arr)

    return root
  }

  return helper(arr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end


deserialize(serialize(root));