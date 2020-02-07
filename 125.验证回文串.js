/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg= /(\w)|(\d)/
  s = s.split('').filter(s => reg.test(s))

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i].toLowerCase() !== s[s.length - i - 1].toLowerCase()) return false
  }
  return true
};
// @lc code=end

isPalindrome("A man, a plan, a canal: Panama" )