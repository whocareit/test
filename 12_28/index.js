//不同路径
//一个机器人位于m x n网络的左上角，起始点在记为“start”。机器人每次只能向下或者向右移动一步，问
//总共有多少条不同的路径
const uniquePaths = (m, n) => {
    const dp = [];
    for(let i = 0; i < m; i++) {
        dp[i] = 1;
    }
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[j] = dp[j] + dp[j-1]
        }
    }
    return dp[m-1];
};
// console.log(uniquePaths(3, 2))

//股票的最大利润
//描述：输入[7,1,5,3,6,4] 输出5，解释：在第二天股票等于1的时候买入。在第五天的时候卖出利润最大，等于6-1=5

const maxProfit = (prices) => {
    if(!prices || prices.length === 0) return 0;
    const dp = [[]], n = prices.length - 1;
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for(let i = 1; i < prices.length; i++) {
        dp[i] = [];
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
    }
    return dp[n][0];
}
console.log(maxProfit( [7,1,5,3,6,4] ));