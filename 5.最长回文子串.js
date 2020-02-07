/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return ''

  let longest = ''
  for(let i = 0; i < s.length; i++) {
    let time = 1
    let stringForThis = s[i]
    let stillHaveChance = true
    while (stillHaveChance) {
      if (s[i - time] && s[i + time]) {
        if (s[i - time] === s[i + time]) {
          stringForThis = s[i - time] + stringForThis + s[i + time]
          time++
        } else {
          stillHaveChance = false 
          if (stringForThis.length > longest.length) longest = stringForThis
        }
      } else {
        stillHaveChance = false 
        if (stringForThis.length > longest.length) longest = stringForThis
      }
    }
  }

  // 偶数
  for(let i = 0; i < s.length; i++) {
    let time = 1
  let stillHaveChanceEven = true
  let stringForThisEven = ''
    while (stillHaveChanceEven) {
      if (s[i - time + 1] && s[i + time]) {
        if (s[i - time + 1] === s[i + time]) {
          stringForThisEven = s[i - time + 1] + stringForThisEven + s[i + time]
          time++
          // console.log(stringForThisEven)
        } else {
          stillHaveChanceEven = false 
          if (stringForThisEven.length > longest.length) longest = stringForThisEven
        }
      } else {
        stillHaveChanceEven = false 
        if (stringForThisEven.length > longest.length) longest = stringForThisEven
      }
    }
  }
  return longest
}

// console.log(longestPalindrome('cccc'))
