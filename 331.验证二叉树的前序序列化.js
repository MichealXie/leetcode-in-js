/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const arr = preorder.split(',')
  const stack = [{
    node: arr[0],
    visited: false
  }]

  while(stack.length) {
    const item = stack.pop()
    if (!item) return false
    if (!item.visited) {
      stack.push({
        node: item.node,
        visited: true
      })
      stack.push({
        node: item.node.left,
        visited: true
      })
      stack.push()
    }

    if (item.node === '#') {

    } else {

    }
  }
  
};
// @lc code=end

