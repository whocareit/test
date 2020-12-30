//找零问题
//给定数量不限的硬币，编写代码计算n分有集中表示法
const waysToChange = (n) => {
    const coins = [1, 5, 10, 25];
    const dp = []; //用作存储
    dp[0] = 1;
    for(let i = 1; i <= n; i++) {
        dp[1] = 0;
    }
    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= n; j++) {
            dp[j] = (dp[j] + dp[j - coins[i]] % 100000007)
        }
    }
    return dp[n]
}