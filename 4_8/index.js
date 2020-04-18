/*
 * @Author: your name
 * @Date: 2020-04-08 14:15:38
 * @LastEditTime: 2020-04-10 10:30:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\4_8\index.js
 */
//深拷贝的实现
function deepclone(origin,target){
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    for(var prop in origin){
        //该属性不属于其原型链上的属性
        if(origin.hasOwnProperty(prop)){
            //判断该类型是否是引用类型
            if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
                if(toStr.call(origin[prop]) === arrStr){
                    target[prop] = [];
                }else{
                    target[prop] = {};
                }
                deepclone(origin[prop], target[prop]);
            }else{
                target[prop] = origin[prop]
            }
        }
    }
    return target;
}

let obj1 = {
    a: 1,
    b: 2,
    c: {
        a: 2,
        b: [
            {
                c: 5
            }
        ]
    }
}

let obj2 = {}
console.log(deepclone(obj1, obj2));
console.log(obj2)