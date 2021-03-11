/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let lastVal = 0
    function helper(root) {
        if (!root) return root

        helper(root.right)
        root.val = root.val + (lastVal ? lastVal : 0)
        lastVal = root.val

        helper(root.left)
        return root
    }
    return helper(root)
};
// @lc code=end
