//归并排序
//时间复杂度：n log n不在位，稳定
const merge = (arr, l, r, m) => {
    let [i, j, k, helpArr] = [l, m+1, l, []];
    while( i <= m && j <= r) {
        if(arr[i] <= arr[j]){
            helpArr[k++] = arr[i++];
        } else {
            helpArr[k++] = arr[j++];
        }
    }
    while(i <= m) {
        helpArr[k++] = arr[i++];
    }
    while(j <= r) {
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
        mid = Math.floor((l+r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid+1, r);
        merge(arr, l, r, mid);
    }
    return arr;
}
console.log(mergeSort([8,4,5,7,1,3,6,2], 0, 7))
//打家劫舍
//描述：小偷沿路打劫，如果两间相邻的房屋在同一晚上被小偷闯入，系统就会
//自动报警，给定每一个房屋存放的金额不是负数，计算在不触动警报的情况下，能够偷窃的
//最高金额
const rab = (num) => {
    if(num.length == 0) return 0;

    let dp = [];
    const numLen = num.length;

    dp[0] = 0;
    dp[1] = num[0];
    for(let i = 2; i <= numLen; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + num[i - 1])
    }
    return dp[numLen];
}
console.log(rab([2,3,1,4,5,2,5,66,7,67,9]));