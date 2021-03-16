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
  preorder = preorder.split(',')
  // 出入度
  // let count = 1
  // for(let str of preorder) {
  //   // 每一个节点都有一个连接出去的地方
  //   count -= 1
  //   // 这里小于0意味着 null 之后连着 null
  //   if (count < 0) return false
  //   if (str !== '#') {
  //     count += 2
  //   }
  // }
  
  // return count === 0

  // 栈
  // 重点是 两个 # 加上父节点是数字时, 用 # 代替 这三个节点
  const stack = []

  for(let i = 0; i < preorder.length; i++) {
    stack.push(preorder[i])

    // 注意这里是 while 不是 if
    while (stack.length >= 3 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
      stack.pop()
      stack.pop()
      stack.pop()
      stack.push('#')
    }
    // console.log(preorder[i])
    // console.log(stack)
  }

  return stack.length === 1 && stack[0] === '#'
};
// @lc code=end


console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"))
console.log(isValidSerialization("1, #"))
console.log(isValidSerialization("9, #, #, 1"))
console.log(isValidSerialization("#"))  // true
console.log(isValidSerialization("#,7,6,9,#,#,#"))