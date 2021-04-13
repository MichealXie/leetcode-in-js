  // 初始化很重要...
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        // 拿与不拿
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
