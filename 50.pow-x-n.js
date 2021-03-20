/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = 1
  if (n < 0) {
    x =  1 / x
    n = -n
  }

  while(n) {
    if (n % 2 === 0) {
      x *= x
      n /= 2
    } else {
      res *= x
      n -= 1
    }
  }

  return res
};
// @lc code=end

