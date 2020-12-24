//归并排序
const merge = (arr, l, r, m) => {
    let [i, j, k, helpArr] = [l, m+1, l, []];
    while(i <= m && j <= r) {
        if(arr[i] <= arr[j]) {
            helpArr[k++] = arr[i++];
        } else {
            helpArr[k++] = arr[j++];
        }
    }
    while(i <= m ){
        helpArr[k++] = arr[i++];
    }
    while( j <= r){
        helpArr[k++] = arr[j++];
    }
    for(let i = l; i <= r; i++) {
        arr[i] = helpArr[i];
    }
    return arr;
}
const mergeSort = (arr, l, r) => {
    let mid;
    if(l < r) {
        mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, r, mid);
    }
    return arr;
}
// console.log(mergeSort([8,4,5,7,1,3,6,2], 0, 7))

const rab = (num) => {
    if(num.length === 0) return 0;
    let dp = [];
    const numLen = num.length;
    dp[0] = 0;
    dp[1] = num[1];
    for(let i = 2; i <= numLen; i++){
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + num[i - 1]);
    }
    return dp[numLen];
}

// console.log(rab([2,3,4,20,56,78]));

//最大子序和
//描述：给定一个整数数组num，找到一个具有最大和的连续子数组，返回其最大和
const maxSubArr = (num) => {
    let maxSub = [num[0]], dp = [num[0]];
    for(let i = 1; i < num.length; i++) {
        if(dp[i - 1] + num[i] > num[i]) {
            dp[i] = dp[i - 1] + num[i];
            maxSub.push(num[i]);
        }else{
            dp[i] = num[i];
            maxSub = [num[i]];
        }
    }
    return {
        max: Math.max(...dp),
        maxSub
    }
}
// console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]));

//最长上升子序列
//描述：给定一个无序的整数数组，找到其中上升子系列的长度
const lengthOfLis = (num) => {
    if(!num.length) return 0;
    let maxLen = 1, dp = [], LisLen = 1;
    for(let i = 0; i < num.length; i++) {
        dp[i] = 1;
    }
    for( let i = num.length - 2; i >= 0; i--) {
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
// console.log(lengthOfLis([10,9,2,5,3,7,101,18]));