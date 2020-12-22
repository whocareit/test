//选择排序
function choose(arr){
    let [min, len, temp] = [0, arr.length, 0]
    for(let i = 0; i < len - 1; i++){
        min = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// console.log(choose([6,2,3,5,1,8,7,9,4]));

//插入排序
function insert(arr){
    let [index, item, n] = [0, 0, arr.length];
    for(let i = 1; i < n; i++){
        index = i - 1;
        item = arr[i];
        while(index >= 0 && arr[index] > item){
            arr[index + 1] = arr[index];
            index--;
        }
        arr[index + 1] = item;
    }
    return arr;
}
// console.log(insert([6,2,3,5,1,8,7,9,4]));

//归并排序
function merge(arr, l, r, m){
    
}

function mergeSort(arr, l, r){
    let mid;
    if(l < r ){
        mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, r, mid);
    }
    return arr;
}
// console.log(mergeSort([6,2,3,5,1,8,7,9,4], 0, 8));

//
//1. 总题数等于答对的，表示同学a全对 =》表示同学b答对的最少与最多相等
//2. 总提数大于答对的，答对题 =》 1. 如果两个人的答案一样，表示最少与最多相等
//                              2. 同学
// function solve( n ,  k ,  str1 ,  str2 ) {
//     // write code here
//     let count = 0,len = str1.length,arr = [];
//     for(let i = 0; i < len; i++){
//             if(str1[i] == str2[i]){
//                 count++;
//             }
//         }
//     if(n == k){
//         arr.push(count, count);
//     }else{
//         if(count == n){
//             arr.push(k, k);
//         }else{
//             arr.push(0, str1.length);
//         }
//     }
//     return arr
// }
// console.log(solve(3, 2, 'ABC', 'ABC'))
