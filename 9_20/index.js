//冒泡排序,最好时间复杂度O(n),最坏时间复杂度O(n^2)
function maoPao(arr){
    let [temp, n] = [0, arr.length];
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// console.log(maoPao([110,234,4,56,67,23]));
//冒泡优化，增加标志位，来简化计算，避免到排序完成之后还需要进行计算过程
function adMao(arr){
    let [temp, n, flag] = [0, arr.length, false];
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(!flag){
            return;
        }
    }
    return arr;
}
// console.log(adMao([110,234,4,56,67,23]));
//选择排序，时间复杂度为O(n^2)
//算法描述：每一轮循环过程中将最小的元素拿出来放在最前面，依次循环直到结束
function selectSort(arr){
    let n = arr.length, min, temp;
    for(let i = 0; i < n; i++){
        min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
// console.log(selectSort([110,234,4,56,67,23]));
//插入排序：最好时间复杂度O(n),最差时间复杂度O(n^2)
function insertSort(arr){
    let [index, item, n] = [0, 0, arr.length];
    for(let i = 1; i < n; i++){
        index = i - 1;
        item = arr[i];
        while(index >= 0 && arr[index] > item){
            arr[index+1] = arr[index];
            index--;
        }
        arr[index+1] = item;
    }
    return arr;
}
// console.log(insertSort([110,234,4,56,67,23]));
//归并排序：时间复杂度O(nlog(n))
function merge(arr, l, r, m){
    let [i, j, k, helpArr] = [l, m+1, l, []];
    while(i <= m && j <= r){
        if(arr[i] <= arr[j]){
            helpArr[k++] = arr[i++];
        }else{
            helpArr[k++] = arr[j++]
        }
    }
    while(i <= m){
        helpArr[k++] = arr[i++];
    }
    while(j <= r){
        helpArr[k++] = arr[j++];
    }
    for(let i = l; i <= r; i++){
        arr[i] = helpArr[i];
    }
    return arr;
}
function mergeSort(arr, l, r){
    let mid;
    if(l < r){
        mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid+1, r);
        merge(arr, l, r, mid);
    }
    return arr;
}
// console.log(mergeSort([8,4,5,7,1,3,6,2],0,7))
//快速排序：时间复杂度最好为O(nlogn),最坏为O(n^2)
function quickSort(arr, left, right){
    if(left > right){
        return;
    }
    let i = left, j = right;
    while(i != j){
        //从右往左进行查找
        while(arr[j] >= arr[left] && i < j){
            j--;
        }
        //从左往右进行查找
        while(arr[i] <= arr[left] && i < j){
            i++;
        }
        if(i < j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    return arr;
}
// console.log(quickSort([8,3,5,6,7,9,1,4], 0, 7));

//递归与迭代
//二分搜索：在具有顺序的数组中查找某一特定的搜索算法，时间复杂度为O(logn);
//递归版本：
function recursionBs(arr, l, r, v){
    if( r - l < 0){
        return -1;
    }
    let mid = Math.floor((l+r) / 2);
    if(v === arr[mid]) return mid;
    else if(k < arr[mid]) return recursionBs(arr, l, mid-1, v);
    else return recursionBs(arr, mid+1, r, v);
}
// console.log(recursionBs([1,2,3,4,5,6],0,5,3));
//迭代版本
function iterBs(arr, l, r, v){
    if(r-l < 0){
        return -1;
    }
    while(l <= r){
        let mid = Math.floor((l+r) / 2);
        if(v === arr[mid]) return mid;
        else if(v < arr[mid]) return r = mid - 1;
        else l = mid + 1;
    }
}
// console.log(iterBs([1,2,3,4,5,6],0,5,3));
// 斐波拉契数列
//递归版本
function fib(n){
    if(n == 0) return 0;
    else if(n == 1) return 1;
    else return fib(n - 1) + fib(n - 2);
}
// console.log(fib(15));
//迭代版本
function dieFib(n){
    let [fib1, fib2, fib3] = [0, 1, 0];
    if(n == 0) return fib1;
    else if(n == 11) return fib2;
    while(n > 1){
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
        n--;
    }
    return fib3;
}
// console.log(dieFib(15))
//动态规划版
function dongFib(n){
    let dp = [];
    function _fib(n){
        if(dp[n]) return dp[n];
        else if(n == 0) dp[n] = 0;
        else if(n == 1) dp[n] = 1;
        else dp[n] = _fib(n - 1) + _fib(n - 2);
        return dp[n];
    } 
    return _fib(n)
}
// console.log(dongFib(100));
//打家劫舍问题
//问题描述：arr表示每个房屋给定的一个整数数组，同时偷相邻两家会触发报警系统
function rob(arr){
    let dp = [], len = arr.length;
    if(len === 0){
        return 0;
    }
    dp[0] = [0];
    dp[1] = arr[0];
    for(let i = 2; i <= len; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+arr[i-1]);
    }
    return dp[len];
}
// console.log(rob([1,2,4,5,7,8,3,10]));
//最大子序和,表示一个可能存在一定顺序的数组
function maxStr(arr){
    let len = arr.length;
    let dp = [arr[0]];
    for(let i = 1; i < len; i++){
        if(dp[i-1] + arr[i] > arr[i]){
            dp[i] = dp[i-1] + arr[i];
        }else{
            dp[i] = arr[i];
        }
    }
    return Math.max(...dp);
}
// console.log(maxStr([-2,1,-3,4,-1,2,1,-5,4]));
//最小路径和
function minPath(grid){
    let dp = [], m = grid.length, n = grid[0].length;
    for(let i = 0; i < m; i++){
        dp[i] = [grid[i][0]];
        for(let j = 0; j < n; j++){
            if(i === 0 && j >= 1){
                dp[i][j] = grid[i][j] + dp[i][j-1];
            }
            else if(j === 0 && i >= 1){
                dp[i][j] = grid[i][j] + dp[i-1][j];
            }
            else if(i >= 1 && j >= 1){
                dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j] + grid[i][j]);
            }
        }
    }
    return dp[m-1][n-1];
}
// console.log(minPath([[1,2,3],[3,2,1],[1,2,1]]));
//不同路径
//问题描述：m*n表示一个网状格子的网络，求总共有多少条不同的路径
function difPath(m, n){
    let dp = [];//用于记录到达(m, n)位置路径数
    for(let i = 0; i < m; i++){
        dp[i] = 1;
    }
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            dp[j] = dp[j] + dp[j-1];
        }
    }
    return dp[m-1];
}
// console.log(difPath(2, 2));
//股票最大利润,prices反应股票每天的情况
function maxProfit(prices){
    if(!prices || prices.length === 0) return 0;
    let dp = [[]], n = prices.length - 1;
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for(let i = 1; i <= n; i++){
        dp[i] = [];
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
    }
    return dp[n][0];
}
// console.log(maxProfit([7,1,5,3,6,4]));
//优化空间复杂度的股票最大利润,直接采用变量去存储，节省空间
function adProfit(prices){
    let len = prices.length;
    if(!prices || len == 0) return 0;
    let dp_i_0 = 0, dp_i_1 = -prices[0];
    for(let i = 1; i < len; i++){
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
}
// console.log(adProfit([7,1,5,3,6,4]));
//硬币问题
//问题描述: 给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
function coin(n){
    const coins = [1, 5, 10, 25];
    //表示存储金额为j时有多少种的表示方式
    const dp = []; 
    dp[0] = 1;
    for(let i = 1; i <= n; i++){
        dp[i] = 0;
    }
    let len = coins.length;
    for(let i = 0; i < len; i++){
        for(let j = coins[i]; j <= n; j++){
            // 左边 dp[j] 表示金额为 j 时有多少种表示法，右边的 dp[j] 表示不选择第 i 个硬币时拥有的表示法.
            // dp[j - coins[i]] 表示选择第 i 个硬币时所拥有的表示法，比如 dp[6],选择 5 时，表示法总数取决于 dp[1]
            dp[j] = (dp[j] + dp[j - coins[i]]) % 1000000007;
        }
    }
    return dp[n];
}
// console.log(coin(50));
//零钱兑换问题
//问题描述: 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
function coinChange(coins, amount){
    let dp = [];    //位置为j, 表示为该位置上金额为j上存储的最少硬币数
    dp[0] = 0;
    for(let i = 1; i <= amount; i++){
        dp[i] = Number.MAX_SAFE_INTEGER;
    }
    for(let i = 0; i < coins.length; i++){
        for(let j = coins[i]; j <= amount; j++){
            let curCoin = dp[j - coins[i]] + 1;
            dp[j] = curCoin < dp[j] ? curCoin : dp[j];
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
// console.log(coinChange([1, 2, 5], 11));
//最长回文子串
//问题描述：给定一个字符串 s，找到 s 中最长的回文子串
function longestStr(s){
    if(s.length < 2) return s;
    const n = s.length, dp = [];
    let maxLen = 1, start = 0;
    for(let i = 0; i < n; i++){
        dp[i] = [];
    }
    for(let j = 1; j < n; j++){
        for(let i = 0; i < j; i++){
            if(s[i] === s[j]){
                if(j - i < 3){
                    dp[i][j] = true;
                }else{
                    dp[i][j] = dp[i+1][j-1];
                }
            }else{
                dp[i][j] = false;
            }
            if(dp[i][j]){
                let curLen = j-i+1;
                if(curLen > maxLen){
                    start = i;
                    maxLen = curLen;
                }
            }
        }
    }
    return s.slice(start, start+maxLen);
}
// console.log(longestStr('accab'));
//完全平方数
//问题描述：给定正整数，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
function numSquares(n){
    const dp = [];
    const ceil = Math.floor(Math.sqrt(n));
    dp[0] = 0;
    for(let i = 1; i <= n; i++){
        dp[i] = Number.MAX_SAFE_INTEGER;
    }
    for(let i = 1; i <= ceil; i++){
        let square = i*i;
        for(let j = square; j <= n; j++){
            dp[j] = Math.min(dp[j - square] + 1, dp[j]);
        }
    }
    return dp[n];
}
// console.log(numSquares(13));
//单词拆分
//问题描述：给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// function wordBreak(s, wordDict){
//     const dp = [], n = s.length;
//     dp[0] = true;
//     for(let i = 1; i <= n; i++){
//         dp[i] = false;
//     }
//     let word = '', wordSize = 0
// }
// console.log(1)
// setTimeout(function(){
//     console.log(2);
// },0)
// new Promise(() => {
//     console.log(3);
//     setTimeout(() => {
//         console.log(4);
//     })
// })
// console.log(5);
// var a = 5;
// function test(){
//   a = 0;
//   console.log(a); 
//   console.log(this.a);
//   var a;
//   console.log(a);
// }
// test();
// new test();
//深度克隆的实现方式
// function clone(origin, target){
//     let target = target || {}, 
//     toStr = Object.prototype.toString,
//     objArr = '[object Array]';
//     for(let item in origin){
//         if(origin.hasOwnProperty(item)){
//             if(origin[item] !== 'null' && typeof origin[item] == 'object'){
//                 if(toStr.call(origin[item]) === objArr){
//                     target[item] = [];
//                 }else{
//                     target[item] = {};
//                 }
//                 clone(origin[item], target[item]);
//             }else{
//                 target[item] = origin[item];
//             }
//         }
//     }
// }
//数组扁平化,使用递归实现
function flatten(arr){
    let res = [];
    arr.map(item => {
        if(Array.isArray(item)){
            res = res.concat(flatten(item));
        }else{
            res.push(item);
        }
    })
    return res;
}
//使用遍历实现,用join与split实现
function fal(arr){
    return arr.join(',').split(',').map(item => Number(item));
}
// console.log(fal([1, [2, 3, [4, 5]]]));
//两数之和
//1. 采用双重for循环来解决
//2. 采用Map数据结构
function twoSum(arr, target){
    if(!arr || arr && arr.length < 2) return [];
    const map = new Map();
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], i);
    }
    for(let i = 0; i < arr.length; i++){
        let result = target - arr[i], anaIndex = map.get(result);
        if(anaIndex && anaIndex !== i) return [i, anaIndex]
    }
}
// console.log(twoSum([32, 3, 5, 1, 30, 76, 2, 10, 29],31));
