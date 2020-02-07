/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function (n) {
    let start = 0
    let end = n
    let mid
  
    while(start < (end - 1)) {
      mid = Math.round((start + end) /2)
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) {
          return mid
        }
        end = mid
      } else {
        start = mid
      }
    }
  
    if (isBadVersion(start)) {
      return start
    }
  
    if (isBadVersion(end)) {
      return end 
    }
  };
};
// @lc code=end
