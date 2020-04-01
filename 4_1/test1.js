/*
 * @Author: your name
 * @Date: 2020-03-31 21:46:02
 * @LastEditTime: 2020-04-01 18:44:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\jsdemo\test1.js
 */

 //数组去重问题实现
 //实现方式1.使用数组的includes方法，不能去除掉空对象
 function unique1(arr){
     let newArr = [];
     let len = arr.length;
     for(let i = 0; i < len; i++){
         if(!newArr.includes(arr[i])){
             newArr.push(arr[i]);
         }
     }
     return newArr;
 }

//  console.log(unique1([1,1,2,5,3,2,8,9,null,null,{},{}]));

 //使用双重循环，加上数组的slice方法，需要注意的一点是slice方法会改变原数组,还是不能删除掉空数组
 function unique2(arr){
     if(!Array.isArray(arr)){
         throw new Error('请传入一个数组');
     }
     let len = arr.length;
     for(let i = 0; i < len; i++){
         for(let j = i + 1; j < len; j++){
             if(arr[i] === arr[j]){
                 arr.splice(j,1);
             }
         }
     }
     return arr;
 }

//  console.log(unique2([1,1,2,5,3,2,8,9,null,null,{},{}]))

//采用es6的Set这个数据结构,Set中的元素都是不重复的
function unique3(arr){
    return Array.from(new Set(arr));
}

// console.log(unique3([1,1,2,5,3,2,8,9,null,null,{},{}]))

//采用indexOf函数实现,同样此方法不能删除重复的空对象
function unique4(arr){
    let newArr = [];
    let len = arr.length;
    for(let i = 0; i < len; i++){
        //数组.indexOf(元素)值为-1，则表示该数组中没有此元素
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(unique4([1,1,2,5,3,2,8,9,null,null,{},{}]))

//使用数组的filter方法与数组的indexOf方法，
//filter方法，如果方法内部的元素返回false则删除当前条件的元素
//indexOf方法，方法中的第二个参数表示开始查询的位置，如果是一共超过数组的长度值则会报错
//如果该值为正数，则从当前位置的从前往后，从0开始计数，如果为负数从-1计数，则从当前位置的从后开始数，往后
function unique5(arr){
    return arr.filter((item,index) => {
        return arr.indexOf(item,0) === index;
    })
}
// console.log(unique5([1,1,2,5,3,2,8,9,null,null,{},{}]))


//使用递归的方式来进行排序
function unique6(arr){
    let len = arr.length;
    let array = arr;
    array.sort((a,b) => {
        return a - b;
    })
    function loop(index){
        if(index >= 1){
            if(array[index] === array[index-1]){
                array.splice(index,1);
            }
            loop(index - 1);
        }
    }
    loop(len - 1);
    return array;
}
// console.log(unique6([1,1,2,5,3,2,8,9,null,null,{},{}]))

//使用reduce方法，该方法含有四个参数，第一个参数表示累加器，第二个参数表示当前值，第三个参数表示索引
//第四个参数表示当前数组
function unique7(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}

// console.log(unique7([1,1,2,5,3,2,8,9,null,null,{},{}]))


//decripe: 已知有字符串 foo=”get-element-by-id”,写一个 function
// 将其转化成驼峰表示法” getElementById”。
function toUpper(foo){
    let arr = foo.split('-');
    let len = arr.length;
    for(let i = 1; i < len; i++){
        arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length - 1);
    }
    return arr.join("");
}
// console.log(toUpper("get-element-by-id"));

//实现降序排列
function resSort(arr){
    return arr.sort((a, b) => {
        return b - a;
    })
}
// console.log(resSort([7,4,8,1,2,3]));

//倒排
function resv(arr){
    let array = []
    arr.reduceRight((prev,cur) => array.push(cur),0);
    return array;
}

// console.log(resv([7,4,8,1,2,3]));

//输出今天的日期，以 YYYY-MM-DD 的方式，比如今天是 2014 年 9 月 26 日， 则输出 2014-09-26
function getD(){
    let d = new Date();
    //得到年份,返回四位数字的年份
    year = d.getFullYear();
    //得到月份,0 - 11表示12个月
    month = d.getMonth() + 1;
    //将月份转化为两位数
    month = month < 10 ? '0' + month : moth;
    //得到日期
    day = d.getDate();
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
}
// console.log(getD());

//获取到10个 10 到 100之间的随机数，并且进行排序
function randomSort(){
    let array = [];
    function getRandom(start, end){
        let iChoose = end - start + 1;
        //Math.random()就是获取到0-1之间的随机数（永远取不到1，所以在之前的运算中要加上1）
        return Math.floor(Math.random() * iChoose + start);
    }
    for(let i = 0; i < 10; i++){
        array.push(getRandom(10,100));
    }
    return array.sort((a,b) => a - b);
}
// console.log(randomSort());


//斐波拉契数列使用arguments.callee实现
// let result = [];
// function fn(n){
//     if(n === 1 || n === 2){
//         return 1;
//     }else{
//         if(result[n]){
//             return result;
//         }else{
//             return arguments.callee(n - 1) + arguments.callee(n - 1);
//         }
//     }
// }
// console.log(fn(10));
