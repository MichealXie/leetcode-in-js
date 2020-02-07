/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 一般为 len + 1, 因为字符串的 slice 是左闭右开!
  // 而且第一个字符包括在里面与否, 是用的 s.slice(0, 1) 而不是 s.slice(0, 0)
  // 但在循环里获取第一个字符是 s[0]
  const dp = [true]

  for (let i = 1;i <= s.length;i++) {
    for (let j = 0;j < i;j++) {
      // (0, j) 已经包含在 dict 中, 且 (j + 1, i) 在里面
      // 自然 0, i 就是整个包含在 dict 中
      if (dp[j] && wordDict.includes(s.slice(j ,i))) {
        dp[i] = true
        // 为什么要 Break?
        // 因为只要有一个包含在 dict 中就够了!
        // 不 break 只是会多算几次
        break
      }
    }
  }
  // console.log(dp)
  // console.log(s.length)

  return dp[s.length] === true
};
// @lc code=end

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(wordBreak("leetcode", ["leet", "code"]))