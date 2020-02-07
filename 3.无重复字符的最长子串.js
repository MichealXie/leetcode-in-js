/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const array = s.split('')
  let maxLen = 0
  let current = ''
  for (let index = 0; index < array.length; index++) {
    const val = array[index];
    const pointer = current.indexOf(val)
    if (pointer === -1) {
      current += val
    } else {
      maxLen = Math.max(current.length, maxLen)
      current = current.slice(pointer + 1) + val
    }
  }
  return Math.max(current.length, maxLen)
}
