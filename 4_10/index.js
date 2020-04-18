 //deepclone
function clone(origin, target){
    var target = target || {},
    toStr = Object.prototype.toString,
    arrStr = "[object Array]"
    for(var prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(origin[prop] !== null && typeof(origin[prop]) == 'object'){
                if(toStr.call(origin[prop]) === arrStr){
                    target[prop] = [];
                }else{
                    target[prop] = {};
                }
                clone(origin[prop], target[prop]);
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

// let obj2 = {}
// console.log(clone(obj1, obj2));
// console.log(obj2)

//抖动，对于函数频繁发生时，使其在等待一段时间之后再去执行
function donce(handle, wait){
    let timer = null;
    return function(){
        let _self = this,
            args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        setTimeout(() => {
            handle.apply(_self,args);
        }, wait);
    }
}

//节流,防止恶意点击
function throttle(handle, wait){
    let initTime = 0;
    return function(){
        let endTime = new Date().getTime();
        if(endTime - initTime > wait){
            handle.apply(this,arguments);
            initTime = endTime;
        }
    }
}

//接口聚合
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');

div1.onclick = function(){
    var param = 1
    log(param);
}

const uploadLog = (ms) => {
    let arr = [];
    let lastEnd = 0;
    return logstr => {
        let currentTime = Date.now();
        arr.push(logstr);
        if(currentTime - lastEnd >= ms){
            console.log(arr);
            lastEnd = currentTime;
            arr = [];
        }
    }
}
// let log = uploadLog(100);

//ajax封装实现



