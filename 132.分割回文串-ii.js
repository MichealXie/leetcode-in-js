/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  // 这里不可以用 map 记录, 因为不会遇到相同的 s...
  function isPalindrome(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - i - 1]) return false
    }
    return true
  }

  let cuts = [0]
  cuts[-1] = -1

  for (let i = 1; i < s.length; i++) {
    // 最差的情况是每一个都需要分割
    cuts[i] = i
    for (let j = 0; j <= i; j++) {
      // 记住这个左闭右开..
      if (isPalindrome(s.slice(j, i + 1))) {
        // 每次有回文, 相当于在j & j-1 之间切一刀
        cuts[i] = Math.min(cuts[i], cuts[j - 1] + 1)
      }
    }
  }

  return cuts[s.length - 1] 
};
// @lc code=end
