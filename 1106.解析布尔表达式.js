/*
 * @lc app=leetcode.cn id=1106 lang=javascript
 *
 * [1106] 解析布尔表达式
 */
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  function parse(currentIndex) {
    let val = expression[currentIndex]
    currentIndex++
    console.log(val)

    switch (val) {
      case 't':
        return true
      case 'f':
        return false
      case '!':
        currentIndex++
        const result = !parse(currentIndex) // ! 为一元操作符, 只关注后方单个数值, 还是得跳过括号
        currentIndex++
        return result
    }

    let isAnd = val === '&'
    let result = isAnd

    while (true) {
      if (expression[currentIndex] === ')') {
        break
      }
      if (isAnd) {
        result = parse(currentIndex+1) && result
      } else {
        result = parse(currentIndex+1) || result
      }
    }
    return result
  }

  return parse(0)
}
// console.log(parseBoolExpr('!(!(!(t)))'))
console.log(parseBoolExpr('|(t,f)'))
// console.log(parseBoolExpr('|(f,t)'))
// console.log(parseBoolExpr('&(t,f)'))
// console.log(parseBoolExpr('|(&(t,f,t),!(t))'))
