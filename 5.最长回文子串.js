/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 久远的解法
  // if (!s) return ''

  // let longest = ''
  // for(let i = 0; i < s.length; i++) {
  //   let time = 1
  //   let stringForThis = s[i]
  //   let stillHaveChance = true
  //   while (stillHaveChance) {
  //     if (s[i - time] && s[i + time]) {
  //       if (s[i - time] === s[i + time]) {
  //         stringForThis = s[i - time] + stringForThis + s[i + time]
  //         time++
  //       } else {
  //         stillHaveChance = false 
  //         if (stringForThis.length > longest.length) longest = stringForThis
  //       }
  //     } else {
  //       stillHaveChance = false 
  //       if (stringForThis.length > longest.length) longest = stringForThis
  //     }
  //   }
  // }

  // // 偶数
  // for(let i = 0; i < s.length; i++) {
  //   let time = 1
  // let stillHaveChanceEven = true
  // let stringForThisEven = ''
  //   while (stillHaveChanceEven) {
  //     if (s[i - time + 1] && s[i + time]) {
  //       if (s[i - time + 1] === s[i + time]) {
  //         stringForThisEven = s[i - time + 1] + stringForThisEven + s[i + time]
  //         time++
  //         // console.log(stringForThisEven)
  //       } else {
  //         stillHaveChanceEven = false 
  //         if (stringForThisEven.length > longest.length) longest = stringForThisEven
  //       }
  //     } else {
  //       stillHaveChanceEven = false 
  //       if (stringForThisEven.length > longest.length) longest = stringForThisEven
  //     }
  //   }
  // }
  // return longest

  // 暴力解...
  // function isPalindrome(s) {
  //   for (let i = 0; i < Math.floor(s.length / 2); i++) {
  //     if (s[i] !== s[s.length - i - 1]) return false
  //   }
  //   return true
  // }
  // if (!s.length) return ''

  // const m = s.length
  // let longest = s[0]

  // for(let i = 1;i <= m;i++) {
  //   for(let j = i;j <= m;j++) {
  //     const word = s.slice(i - 1, j)
  //     if(word.length > longest.length && isPalindrome(word)) {
  //       const len = (j) - (i - 1)
  //       if(len > longest.length) {
  //         longest = word
  //       }
  //     }
  //   }
  // }

  // return longest

  // dp
  if (!s.length) return ''
  const m = s.length
  // dp[i][j]: s.slice(i, j) 是不是回文串
  const dp = Array.from(Array(m + 1), () => Array(m + 1).fill(0))
  for (let i = 0; i <= m; i++) {
    dp[i][i] = 1
  }
  let longest = s[0]
  // 注意这道题不是从右下角开始, 而是 i = m - 1, j = m 开始
  // 即右下角的第一个 0

  for (let i = m - 1; i >= 0; i--) {
    for (let j = i + 1; j <= m; j++) {
      if (s[i] === s[j]) {
        // 这道题用动态规划实在麻烦...
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 一旦发现有回文, 马上更新长度
      const word = s.slice(i, j + 1)
      if (dp[i][j] && word.length > longest.length) {
        longest = word
      }
    }
  }
  return longest

  // 马拉车
  // function centerSpread(arr, center) {
  //   let left = center - 1
  //   let right = center + 1
  //   let step = 0
  //   while (left >= 0) {
  //     if (arr[left] !== arr[right]) break
  //     left--
  //     right++
  //     step++
  //   }
  //   return step
  // }

  // if (!s) return ''
  // let longest = [s[0]]
  // const placeholder = '`'
  // const arr = s.split('').join(placeholder).split('')
  // for (let i = 1; i < arr.length; i++) {
  //   const step = centerSpread(arr, i)
  //   const cur = arr.slice(i - step, i + step + 1).filter(item => item !== placeholder)
  //   if (cur.length > longest.length) {
  //     longest = cur
  //   }
  // }

  // return longest.join('')
}

console.log(longestPalindrome('bb'))
