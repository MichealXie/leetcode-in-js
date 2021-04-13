/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const states = Array(amount + 1).fill(Infinity)
  states[0] = 0
  for(let i = 1;i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        states[i] = Math.min(states[i - coin] + 1, states[i])
      }
    }
  }
  console.log(states)

  return states[states.length - 1] === Infinity ? -1 : states[states.length - 1]
};
// @lc code=end

console.log(coinChange([1, 2, 5, 11], 11)) 
console.log(coinChange([2], 3))

