/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    function swap(arr, left, right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
    function helper(left) {
      console.log(left)
        let right = (s.length - left - 1)

        if (left >= right) {
            return
        }

        swap(s, left, right)
        helper(++left)
    }
    helper(0)
    console.log(s)
};
// @lc code=end

reverseString(["H","a","n","n","a","h"])
