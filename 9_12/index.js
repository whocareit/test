// //mp,时间复杂度O(n^2)
// function mp(arr){
//     let [temp, len] = [0, arr.length];
//     for(let i = 0; i < len - 1; i++){
//         for(let j = 0; j < len - 1 - i; j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// // console.log(mp([1,2,455,56,34,656,12,334]))
// function mpA(arr){
//     let [temp, len, flag] = [0, arr.length, false];
//     for(let i = 0; i < len - 1; i++){
//         for(let j = 0; j < len - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//                 flag = true;
//             }
//         }
//         if(!flag){
//             return;
//         }
//     }
//     return arr;
// }
// // console.log(mpA([1,2,455,56,34,656,12,334]))
// //选择,时间复杂度O(n^2)
// function choose(arr){
//     let len = arr.length,min,temp;
//     for(let i = 0; i < len - 1; i++){
//         min = i;
//         for(let j = i+1; j < len; j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp;
//     }
//     return arr;
// }
// // console.log(choose([1,2,455,56,34,656,12,334]))
// //插入
// function insert(arr){
//     let [index, tmp, len] = [0, 0, arr.length];
//     for(let i = 1; i < len; i++){
//         index = i - 1;
//         tmp = arr[i];
//         while(index >= 0 && arr[index] > tmp){
//             arr[index+1] = arr[index];
//             index--;
//         }
//         arr[index+1] = tmp;
//     }
//     return arr;
// }
// // console.log(insert([1,2,455,56,34,656,12,334]))
// //归并排序，时间复杂度O(nlog(n))
// function merge(arr, l, r, m){
//     let [i, j, k, tmpArr] = [l, m+1, l, []];
//     while( i <= m && j <= r){
//         if(arr[i] <= arr[j]){
//             tmpArr[k++] = arr[i++];
//         }else{
//             tmpArr[k++] = arr[j++];
//         }
//     }
//     while(i <= m){
//         tmpArr[k++] = arr[i++];
//     }
//     while(j <= r){
//         tmpArr[k++] = arr[j++];
//     }
//     for(let i = l; i <= r; i++){
//         arr[i] = tmpArr[i];
//     }
//     return arr;
// }
// function mergeSort(arr, l, r){
//     let mid;
//     if(l < r){
//         mid = Math.floor((l + r) / 2);
//         mergeSort(arr, l, mid);
//         mergeSort(arr, mid+1, r);
//         merge(arr, l, r, mid);
//     }
//     return arr;
// }
// // console.log(mergeSort([8,4,5,7,1,3,6,2],0,7))
// //快速排序
// function quickSort(arr, left, right){
//     if(left > right){
//         return;
//     }
//     let i = left,j = right;
//     while( i !== j){
//         //从右往左
//         while(arr[j] >= arr[left] && i < j){
//             j--;
//         }
//         //从左往右
//         while(arr[i] <= arr[left] && i < j){
//             i++;
//         }
//         if(i < j){
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
//     [arr[left], arr[i]] = [arr[i], arr[left]];
//     quickSort(arr, left, i - 1);
//     quickSort(arr, i + 1, right);
//     return arr;
// }
// // console.log(quickSort([4,3,7,9,0,2,3,1,5],0,8));
// //最大子序列之和
// // function sumAdd(arr){
// //     let dp = [arr[0]],len = arr.length;
// //     for(let i = 1; i < len; i++){
// //         if(dp[i - 1] + arr[i] > arr[i]){
// //             dp[i] = dp[i - 1] + arr[i];
// //         }else{
// //             dp[i] = arr[i];
// //         }
// //     }
// //     return Math.max(...dp);
// // }
// // console.log(sumAdd([-2,1,-3,4,-1,2,1,-5,4]));
// let arr = '1,2,3'
// let newarr = arr.split(",").map(item => {
//     console.log(typeof +item)
//     return +item;
// })
// console.log(newarr)