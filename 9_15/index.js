//二分搜索，在有序数组中查找某一特定元素的搜索算法，时间复杂度为O(logn)
//迭代版本
function reSearch(arr, l, r, k){
    if(r - l < 0){
        //表示没有元素
        return -1;
    }
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(k === arr[mid]) return mid;
        else if(k < arr[mid]) r = mid - 1;
        else l = mid + 1;
    }
}
console.log(reSearch([1,2,3,4,5,6],0,5,3));
//递归版本
function reSearchBs(arr, l, r, k){
    if(r - l < 0){
        return -1;
    }
    let mid = Math.floor((l + r) / 2);
    if(k === arr[mid]) return mid;
    else if(k < arr[mid]) reSearchBs(arr, l, mid-1, k);
    else reSearchBs(arr, mid+1, r, k);
}
console.log(reSearchBs([1,2,3,4,5,6],0,5,3));
//打家劫舍问题
function rob(num){
    const numLen = num.length;
    if(numLen === 0){
        return 0;
    }
    let dp = [];
    dp[0] = 0;
    dp[1] = num[1];
    for(let i = 2; i <= numLen; i++){
        dp[i] = Math.max(dp[i - 1],dp[i - 2] + num[i - 1]);
    }
    return dp[numLen];
}
console.log(rob([1,3,5,7,8,20,39]));
//最大子序和
function maxSub(num){
    let dp = [num[0]];
    for(let i = 1; i < num.length; i++){
        if(dp[i - 1] + num[i] > num[i]){
            dp[i] = dp[i - 1] + num[i];
        }else{
            dp[i] = num[i];
        }
    }
    return Math.max(...dp);
}
console.log(maxSub([-2,1,-3,4,-1,2,1,-5,4]));
//最长上升序列
//问题描述：给定一个无序的整数数组，找出其中最长上升子序列的长度
function lengthIs(num){
    if(!num.length) return 0;
    let maxLen = 1,dp = [],lisLen = 1;
    for(let i = 0; i < num.length; i++){
        dp[i] = 1;
    }
    for(let i = num.length - 2; i >= 0; i--){
        maxLen = 1;
        for(let j= i+1; j < num.length; j++){
            if(num[i] < num[j] && dp[j] + 1 > maxLen){
                maxLen = dp[j]+1;
            }
        }
        maxLen > 1 ? dp[i] = maxLen : '';
        dp[i] > lisLen ? lisLen = dp[i] : '';
    }
    return lisLen;
}
console.log(lengthIs([10,9,2,5,3,7,101,18]));
//最小路径和
//问题描述：给定一个包含非负整数的m x n网络，找出一条左上角到右下角的路径，使得路径上的数字总和为最小
//每次只能往下或者向右走一步
//其表现形式为一个二维数组
function minPathSum(grid){
    let dp = [], m = grid.length, n = grid[0].length;
    for(let i = 0; i < m; i++){
        dp[i] = [grid[i][0]];
        for(let j = 0; j < n; j++){
            if(i === 0 && j >= 1){
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            }else if(j === 0 && i >= 1){
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            }else if(i >= 1 && j >= 1){
                dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j] + grid[i][j]);
            }
        }
    }
    return dp[m-1][n-1];
}
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))

function checkValue(value){
    value = value.replace(/[^\d]/g,'');    
    if(''!=value){        
        value = parseInt(value);  
    }    
    return value;
}
console.log(checkValue('-45456'))