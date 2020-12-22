const re = (s) => {
    let x = 0, y = s.length - 1;
    while(x < y){
        [s[x], s[y]] = [s[y], s[x]];
        x++,y--;
    }
    return s;
}
// console.log(re(["h","e","l","l","o"]));

//题目描述：给定一串自然数，如果该串自然数中连续的存在三个以上的连续自然数，就将其表示为
//第一个数字-最后一个数字的形式，其余按照空格处理。如
//给定一个数组'[1,2,3,4,6,7,8,10,11,45,46]'
//输出 '1-4 6-8 10 11 45 46'
function fn(arr){
    let result = [], i = 0;
    result[i] = [arr[i]];
    arr.reduce((prev, cur) => {
        cur - prev === 1 ?  result[i].push(cur) : result[++i] = [cur];
        return cur;  
    })
    let temp = "";
    result.forEach(item => {
        if(item.length < 3){
            temp += `${item.join(" ")} `;
        }else{
            temp += `${item[0]}-${item[item.length - 1]} `
        }
    })
    return temp;
}
// console.log(fn([1,2,3,4,6,7,8,10,11,45,46]));

function deepClone(origin, target){
    var target = target || {}, toStr = Object.prototype.toString, oA = "[object Array]";
    for(let item in origin){
        if(origin.hasOwnProperty(item)){
            if(origin[item] !== 'null' && typeof(origin[item]) == 'object'){
                if(toStr.call(origin[item]) == oA){
                    target[item] = [];
                }else{
                    target[item] = {};
                }
                deepClone(origin[item], target[item]);
            }else{
                target[item] = origin[item];
            }
        }
    }
    return target;
}
// str = {
//     a: 1,
//     b: [
//         {
//             c: 3,
//             d : {
//                 obj: 'name'
//             }
//         }
//     ]
// }
// console.log(deepClone(str,{}));

//节流
// function throttle(handle, wait){
//     var initTime = 0;
//     return function(){
//         var lastTime = new Date().getTime();
//         if(lastTime - initTime > wait){
//             handle.apply(this, arguments);
//             initTime = lastTime;
//         }
//     }
// }

// //抖动
// function debounce(handle, delay){
//     var timer = null;
//     return function(){
//         var _self = this, _arg = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             handle.apply(_self, _arg);
//         }, delay)
//     }
// }

function replaceSpace(str){
    let arr = str.split(" ");
    let len = arr.length - 1;
    while(len >= 0){
        str = str.replace(" ", "%20");
        len--;
    }
    return str;
}
// console.log(replaceSpace("We Are Happy"));

// function foo({x = 1, y = 2}){
//     return [x,y];
// }
// console.log(foo({a: 3, b: 5}));
let i = 1001;
while(i <= 2000) {
    console.log(i);
    i++;
}