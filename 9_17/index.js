//最大子序和
function maxSum(arr){
    if(arr.length === 0){
        return 0;
    }
    let dp = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(dp[i - 1] + arr[i] > arr[i]){
            dp[i] = dp[i - 1] + arr[i];
        }else{
            dp[i] = arr[i];
        }
    }
    return Math.max(...dp);
}
// console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]));
//最长上升子序列
function lengthLis(arr){
    if(!arr.length) return 0;
    let maxLen = 1,dp = [], LisLen = 1;
    for(let i = 0; i < arr.length; i++){
        dp[i] = 1;
    }
    for(let i = arr.length - 2; i >= 0; i--){
        maxLen = 1;
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j] && dp[j] + 1 > maxLen){
                maxLen = dp[j] + 1;
            }
        }
        maxLen > 1 ? dp[i] = maxLen : '';
        dp[i] > LisLen ? LisLen = dp[i] : '';
    }
    return LisLen;
}
// console.log(lengthLis([10,9,2,5,3,7,101,18]));
//最小路径和
function minPath(grid){
    let dp = [], m = grid.length, n = grid[0].length;
    for(let i = 0; i < m; i++){
        dp[i] = [grid[i][0]];
        for(let j = 0; j < n; j++){
            if(i === 0 && j >= 1){
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            }else if(j === 0 && i >= 1){
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            }else if( i >= 1 && j >= 1){
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j] + grid[i][j])
            }
        }
    }
    return dp[m-1][n-1];
}
//不同路径
function differentPath(m, n){
    const dp = [];
    for(let i = 0; i < m; i++){
        dp[i] = 1;
    }
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            dp[j] = dp[j] + dp[j - 1];
        }
    }
    return dp[m-1];
}
// console.log(differentPath(2,5));
//股票的最大利润
//问题描述：假设把股票的价格按照时间顺序存储在数组中，请问买卖该股票一次可以获得的利润为多少
//实例说明：输入[7,1,5,3,6,4]输出5，解释：在第二天股票价格为1的时候买入，在第五天股票价格为6的时候卖出，最大利润为6-1,因为卖出价格需要大于买入价格。
function maxProfit(prices){
   if(!prices || prices.length === 0) return 0;
   let dp = [[]],n = prices.length - 1;
   dp[0][0] = 0;
   dp[0][1] = -prices[0];
   for(let i = 1; i < prices.length; i++){
       dp[i] = [];
       dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
       dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
   }
   return dp[n][0];
}
// console.log(maxProfit([7,1,5,3,6,4]));
//优化空间复杂度方式
function aMaxProfit(prices){
    if (!prices || prices.length === 0) return 0
    let dp_i_0 = 0,dp_i_1 = -prices[0];
    for(let i = 1; i < prices.length; i++){
        dp_i_0 = Math.max(dp_i_0, dp_i_1+prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
}
// console.log(aMaxProfit([7,1,5,3,6,4]));
//硬币
//