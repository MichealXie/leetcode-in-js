/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // 暴力解... 010010 过不了, 不知道原因
  // const result = []
  // for (let a = 1; a < 4; a++) {
  //   for (let b = 1; b < 4; b++) {
  //     for (let c = 1; c < 4; c++) {
  //       for (let d = 1; d < 4; d++) {
  //         // 没有 parseInt 会导致空字符串, 进入下面的判断
  //         let s1 = parseInt(s.slice(0, a))
  //         let s2 = parseInt(s.slice(a, a + b))
  //         let s3 = parseInt(s.slice(a + b, a + b + c))
  //         let s4 = parseInt(s.slice(a + b + c))

  //         if (s1 <= 255 && s2 <= 255 && s3 <= 255 && s4 <= 255) {
  //           const matched = [s1, s2, s3, s4].join('.')
  //           if (!result.includes(matched)) {
  //             result.push(matched)
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // return result

  // 回溯
  const result = []
  dfs([], 0)
  return result
  function dfs(cur, start) {
    if (cur.length > 4) return
    if (start > s.length) return
    if (s.length - cur.join('').length > (4 - cur.length) * 3) return

    const matched = cur.join('.')
    if (matched.length === s.length + 3) {
      result.push(matched)
      return
    }

    for (let i = start; i < start + 3; i++) {
      if (i > s.length) continue

      const num = parseInt(s.slice(start, i + 1))
      if (num <= 255) {
        cur.push(String(num))
        dfs(cur, i + 1)
        cur.pop()
      }
    }
  }
};
// @lc code=end
console.log(
  restoreIpAddresses("0000")
)
