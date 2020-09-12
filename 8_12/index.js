//字符串排列
// function printString(str){
//     let result = [];
//     if(str == null){
//         return result;
//     } else if(str.length === 1){
//         return [str];
//     } else {
//         for(let i = 0; i < str.length; i++){
//             let c = str[i];
//             let newStr = str.slice(0, i) + str.slice(i + 1, str.length);
//             console.log(newStr,'newStr')
//             let arr = printString(newStr);
//             for(let j = 0; j < arr.length; j++){
//                 let temp = c + arr[j];
//                 result.push(temp)
//             }
//         }
//     }
//     return result;
// }

// console.log(printString('abc'))

//快慢指针，打印倒数第k个节点
// 

// function res(n){
//     let cache = []
//     if(cache[n]){
//         return cache[n];
//     }
//     if(n == 1){
//         cache[n] = 1;
//     }else if(n == 2){
//         cache[n] = 2;
//     }else{
//         cache[n] = res(n - 1) + res(n - 2);
//     }
//     return cache[n];
// }

// console.log(parseInt('154651ab'),res(36));