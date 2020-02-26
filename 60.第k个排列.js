/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  // 全排列做法, 超时
  // const result = []
  // let kthResult = null
  // const used = Array(n).fill(false)
  // dfs([])
  // return kthResult


  // function dfs(cur) {
  //   if (cur.length === n) {
  //     result.push([...cur])
  //     if (result.length === k) {
  //       kthResult = result[result.length - 1].join('')
  //     }
  //     return
  //   }

  //   for (let i = 1; i <= n; i++) {
  //     if (used[i]) continue
  //     cur.push(String(i))
  //     used[i] = true
  //     dfs(cur)
  //     cur.pop()
  //     used[i] = false
  //   }
  // }

  // 数学解
  // find index
  let remain = k
  let startFrom = 0
  const groupSize = getGroupSize(n)
  // console.log(groupSize)
  function getGroupSize(num) {
    let size = 1
    while(num - 1 > 0) {
      size *= num - 1
      num--
    }
    
    return size
  }
  while(remain > groupSize) {
    remain -= groupSize
    startFrom++
  }
  // console.log(startFrom, remain)
  
  let result = null
  const used = Array(3).fill(false)
  dfs([], startFrom)
  return result

  function dfs(cur, start) {
    if (cur.length === n) {
      // 第 k 个数, 所以要先剪掉...
      remain-- 
      if (remain === 0) {
        result = cur.join('')
      }
      return
    }

    for(let i = start + 1;i <= n;i++) {
      if (used[i]) continue

      cur.push(i)
      used[i] = true
      dfs(cur, 0)
      cur.pop()
      used[i] = false
    }
  }
};
// @lc code=end


console.log(
  getPermutation(3,3)
)