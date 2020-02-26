/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const used = {}
  const result = []

  helper(result, [], used, 0)
  return result
  function helper(result, combination, used, len) {
    if (len === digits.length) {
      result.push([...combination].join(''))
      return
    }

    for (let i = len;i < digits.length;i++) {
      if (used[i]) continue
      const digit = digits[i]
      used[i] = true
      for (let d of map[digit]) {
        combination.push(d)
        helper(result, combination, used, len + 1)
        combination.pop()
      }
      used[i] = false
    }
  }
};
// @lc code=end
console.log(
  letterCombinations('22')
)
