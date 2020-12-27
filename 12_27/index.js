//quickSort
//时间复杂度最好的情况是O(nlogn)，最坏的情况是O(n^2)
function quickSort(arr, left, right) {
    if(left > right) return;
    let i = left, j = right, pivot = arr[left];
    while( i != j ) {
        while(arr[j] >= pivot && i < j) {
            j--;
        }
        while(arr[i] <= pivot && i < j) {
            i++;
        }
        if(i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
    return arr;
}
// console.log(quickSort([4,3,7,9,0,2,3,1,5],0,8));

//最大子序和
const masSubArr = (num) => {
    let maxArr = [num[0]], dp = [num[0]];
    for(let i = 1; i < num.length; i++) {
        if(dp[i - 1] + num[i] > num[i]) {
            maxArr.push(num[i]);
            dp[i] = dp[i - 1] + num[i];
        } else {
            maxArr = [num[i]];
            dp[i] = num[i];
        }
    }
    return {
        max: Math.max(...dp),
        maxArr
    }
}
// console.log(masSubArr([-2,1,-3,4,-1,2,1,-5,4]))

//最长上升子序列
const maxLength = (num) => {
    if(!num.length) return 0;
    let maxLen = 1, dp = [], LisLen = 1;
    for(let i = 0; i < num.length; i++) {
        dp[i] = 1;
    }
    for(let i = num.length - 2; i >= 0; i--) {
        maxLen = 1;
        for(let j = i + 1; j < num.length; j++) {
            if(num[i] < num[j] && dp[j] + 1 > maxLen) {
                maxLen = dp[j] + 1;
            }
        }
        maxLen > 1 ? dp[i] = maxLen : '';
        dp[i] > LisLen ? LisLen = dp[i] : '';
    }
    return LisLen;
}
// console.log(maxLength([10,9,2,5,3,7,101,18]));

//最小路径和
const minPathSum = (grid) => {
    let dp = [], m = grid.length, n = grid[0].length;
    for(let i = 0; i < m; i++) {
        dp[i] = [grid[i][0]];
        for(let j = 0; j < n; j++) {
            if(i === 0 && j >= 1) {
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            } else if(j === 0 && i >= 1) {
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            } else if(j >=1 && i >= 1) {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j] + grid[i][j]);
            }
        }
    }
    return dp[m - 1][n -1]
}
// console.log(minPathSum([[1,2,3],[1,2,3],[4,5,6]]));