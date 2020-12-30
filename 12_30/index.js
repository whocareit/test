//硬币问题
const waysToChange = (n) => {
    const coins = [1, 5, 10, 25];
    const dp = [];
    dp[0] = 1;
    for(let i = 1; i <= n; i++) {
        dp[i] = 0;
    }
    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= n; j++) {
            dp[j] = (dp[j] + dp[j - coins[i]]) % 1000000007
        }
    }
    return dp[n];
} 

//零钱兑换
//给定不同面额的硬币coins和一个总金额amount。编写一给函数来计算可以凑成总金额所需要的最少的硬币个数。如果没有任何一种硬币组合，则返回-1
const coinsChange = (coins, amount) => {
    const dp = [];
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
    }
    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            let curCoinNum = dp[j - coins[i]] + 1;
            dp[j] = curCoinNum < dp[j] ? curCoinNum : dp[j]
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
console.log(coinsChange([1, 2, 5], 11))