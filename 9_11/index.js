// let arr1 = [3, 2, 1],arr2 = [2, 2, 3],count = 0,n = 3,min = 10000000000, j = -1;
// function result(arr1, arr2, n, count, cur){
//     let arLen = arr1.length - 1
//     for(let i = 0; i < arr2.length; i++){
//         if(arr2[i] < arr1[arLen]){
//             count++;
//         }else if(arr2[i] == arr1[arLen]){
//             cur.push(arr1[arLen]);
//             arr1.pop();
//             arr2.splice(i,1);
//             i--;
//             result(arr1, arr2, n - 1, count = 0, cur);
//         }else{
//             if(arr2[i] < min){
//                 min = arr2[i];
//                 j = i;
//             }
//         }
//     }
//     cur.push(arr2[j]);
//     arr2.splice(j,1);
//     let newC = arr2.sort((m,n) =>  m - n);
//     cur = [...cur, ...newC];
//     if(count === n ){
//         return -1;
//     }else{
//         return parseInt(cur.join(""));
//     }
// }
// console.log(result(arr1, arr2, n, count, []));

//全排列实现
//字符串全排列
// function sortString(str){
//     var result = [];
//     if(str.length === 1){
//         return [str];
//     }else{
//         for(let i = 0; i < str.length; i++){
//             let c = str[i];
//             let newStr = str.slice(0, i) + str.slice(i + 1, str.length);
//             let tempStr = sortString(newStr);
//             for(let j = 0; j < tempStr.length; j++){
//                 let temp = c + tempStr[j];
//                 result.push(temp);
//             }
//         }
//     }
//     return result;
// }
// console.log(sortString('abc'));
//数字的全排列
function numSort(num){
    var result = [];
    if(num.length === 1){
        return num;
    }else{
        for(let i = 0; i < num.length; i++){
            let c = num[i];
            let newNum = num.slice(0, i).concat(num.slice(i + 1, num.length));
            let tempNum = numSort(newNum);
            console.log(tempNum)
            // for(let j = 0; j < tempNum.length; j++){
            //     console.log(tempNum,'temp')
            //     // let temp = [c, ...tempNum[i]];
            //     // result = [...result, ...temp];
            // }
        }
    }
    // return result;
}
console.log(numSort([1,2,3]))