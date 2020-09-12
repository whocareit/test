// //冒泡排序,暴力解法，时间复杂度为O(n^2)不稳定
// function maoPao(arr){
//     let [temp, n] = [0, arr.length];
//     for(let i = 0; i < n - 1; i++){
//         for(let j = 0; j < n - 1 - i; j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(maoPao([23,445,6778,990,343]));
// //优化的冒泡排序,如果存在某一趟没有交换说明，此数组中的数据已经有顺序
// function maoPao1(arr){
//     let [temp, n, flag] = [0, arr.length, false]
//     for(let i = 0; i < n - 1; i++){
//         for(let j = 0; j < n - 1 - i; j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 flag = true;
//             }
//         }
//         if(flag === false){
//             return;
//         }
//     }
//     return arr;
// }
// console.log(maoPao1([60,56,232,56,23,45]))
// //选择排序 chooseSort,每次扫描都将最小值放在最前面，该算法的时间复杂度为O(n^2)在位，不稳定
// const chooseSort = (arr) => {
//     let n = arr.length,temp,min;
//     for(let i = 0; i < n - 1; i++){
//         min = i;
//         for(let j = i + 1; j < n ; j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp; 
//     }
//     return arr;
// }
// console.log(chooseSort([8,5,10,343,455,78]))
// //插入排序，最好的情况是O(n),最差的情况是O(n^2),
// //思路，将当前位与之前已知道的排序好的有序队列进行比较，再进行插入操作
// const insertSort = (arr) => {
//     let [n,index,item] = [arr.length, 0, 0];
//     for(let i = 1; i < n ; i++){
//         index = i - 1;
//         item = arr[i];
//         while(index >= 0 && arr[index] > item){
//             arr[index + 1] = arr[index];
//             index--;
//         }
//         arr[index + 1] = item;
//     }
//     return arr;
// }
// console.log(insertSort([3,1,2,5,4,7,1,3,5]));
// //分治法，把一个问题分解为多个相同或者相似的子问题，直到最后子问题可以简单求解，原问题的解，就为
// //子问题解的合并
// //归并排序，时间复杂度为O(nlogn),最坏、最好以及平均复杂度都为nlog(n),因而稳定
// //思路：将数组进行拆分，再进行合并，最后得到排序结果
// const merge = (arr, l, r, m) => {
//     let [i,j,k,helpArr]=[l,m+1,l,[]];
//     while(i <= m && j <= r){
//         if(arr[i] <= arr[j]){
//             helpArr[k++] = arr[i++];
//         }else{
//             helpArr[k++] = arr[j++];
//         }
//     }
//     while(i <= m){
//         helpArr[k++] = arr[i++];
//     }
//     while(j <= r){
//         helpArr[k++] = arr[j++];
//     }
//     for(let i = l; i <= r; i++){
//         arr[i]=helpArr[i];
//     }
//     return arr;
// }
// const mergeSort = (arr, l, r) => {
//     let mid;
//     //将数组中的数据进行分组并合并
//     if(l < r){
//         mid = Math.floor((l + r) / 2);
//         mergeSort(arr, l, mid);
//         mergeSort(arr, mid + 1, r);
//         merge(arr, l, r, mid);
//     }
//     return arr;
// }
// console.log(mergeSort([8,4,5,7,1,3,6,2],0,7));
// //快速选择排序，最好时间复杂度为O(nlogn)，最坏时间复杂度为O(n^2);
// function quickSort(arr, left, right){
//     if(left > right){
//         return;
//     }
//     let i = left, j = right;
//     while(i != j){
//         //从右往左找比基地小的元素
//         while( arr[j] >= arr[left] && i < j){
//             j--;
//         }
//         //从左往右找比基地大的元素
//         while( arr[i] <= arr[left] && i < j){
//             i++;
//         }
//         if(i < j){
//            [arr[i], arr[j]] = [arr[j], arr[i]] 
//         }
//     }
//     [arr[left], arr[i]] = [arr[i], arr[left]];
//     quickSort(arr, left, i - 1);
//     quickSort(arr, i + 1, right);
//     return arr;
// }
// console.log(quickSort([4,3,7,9,0,2,3,1,5],0,8));
//斐波拉契数列
//递归版本
const feiBol = (n) => {
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }
    return feiBol(n - 1) + feiBol(n - 2);
}
console.log(feiBol(6))
//迭代版本
const feiBol1 = (n) => {
    let [fib1, fib2, fib3] = [0, 1, 0];
    if(n === 0){
        return fib1;
    }else if(n === 1){
        return fib2;
    }
    while(n > 1){
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
        n--;
    }
    return fib3;
}
console.log(feiBol1(7));
//动态规划：保存已经解决过的子问题，用空间换时间
//原理： 最优子结构： 选或不选，是两种情况，同时诞生两个子问题的解，比较结果，选择最优的解放入
//      重叠子问题： 在求解的过程中诞生大量相同的子问题
//解题思路：申请一个dp数组，明确数组中每个元素代表的含义，找到状态方程和base case。一般求最值
const feiBol2 = (n) => {
    let cur = [];
    const _fib = (n) => {
        if(cur[n]){
            return cur[n];
        }
        if(n === 0){
            cur[n] = 0;
        }else if(n === 1){
            cur[n] = 1;
        }else{
            cur[n] = _fib(n - 1) + _fib(n - 2);
        }
        return cur[n];
    }
    return _fib(n)
}
console.log(feiBol2(30));
//打家劫舍问题
//问题描述：你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装
//有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。 给定一个代表每个房屋存放金额的非负整数
//数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
function rob(num){
    const numLen = num.length;
    if(numLen === 0){
        return 0;
    }
    let dp = [];
    dp[0] = 0;
    dp[1] = num[0];
    for(let i = 2; i <= numLen; i++){
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + num[i - 1]);
    }
    return dp[numLen];
}
console.log(rob([1, 5, 7, 9, 7, 10]));
//最大子序和
//给定一个整数数组 numS ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
function maxStr(numS){
    let dp = [numS[0]];
    for(let i = 1; i < numS.length; i++){
        if(dp[i - 1] + numS[i] > numS[i]){
            dp[i] = dp[i - 1]+ numS[i];
        }else{
            dp[i] = numS[i];
        }
    }
    return Math.max(...dp);
}
console.log(maxStr([-2,1,-3,4,-1,2,1,-5,-1,4,7,9]));
//最长上升子序列
//给定一个无序的整数数组，找其中最长上升子序列的长度
function lengthOrder(num){
    let len = num.length;
    let maxLen = 1, dp = [], lisLen = 1;
    if(!len) return 0;
    for(let i = 0; i < len; i++){
        dp[i] = 1;
    }
    
}
