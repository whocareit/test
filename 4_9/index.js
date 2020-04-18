/*
 * @Author: your name
 * @Date: 2020-04-09 09:33:40
 * @LastEditTime: 2020-04-09 14:38:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\4_9\index.js
 */
// function result(str,target){
//     let arr = str.split('');
//     let newArr = arr.map(Number);
//     let len = arr.length;
//     let count = 0;
//     function _result(index,target,shot){
//         let layer = [];
//         if(index === len){
//             if(shot === target){
//                 count++;
//             }
//             return;
//         }
//         layer.push(shot - newArr[index + 1])
//         layer.push(shot + newArr[index + 1])
//         console.log(layer)
//         for(let j = 0; j < layer.length; j++){
//             _result(index+1,target,layer[j])
//         }
//     }
//     _result(0,target,newArr[0]);
//     return count;
// }
// console.log(result('12345',3));


