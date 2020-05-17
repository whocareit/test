//call原理实现
Function.prototype.newCall = function(){
    var ctx = arguments[0] || window;
    ctx.fn = this;
    var arr = [];
    for(var i = 1; i < arguments.length; i++){
        arr.push('arguments[' + i + ']')
    }
    var result = eval('ctx.fn('+ arr.join(',')+')');
    delete ctx.fn;
    return result;
}

Function.prototype.myCall = function(content = window, ...args){
    if(this == Function.prototype){
        return undefined;
    }

    content = content || window;
    const fn = Symbol();
    content[fn] = this;
    const result = content[fn](...args);
    delete content[fn];
    return result;
}

//apply原理实现,需要传入数组，所以在参数实现的过程中需要传入一数组作为参数
Function.prototype.newApply = function(ctx, arr){
    var ctx = arguments[0] || window;
    ctx.fn = this;
    if(!arr){
        var result = ctx.fn();
        delete ctx.fn;
        return result;
    } else {
        var args = [];
        for(var i = 1; i < arr.length; i++){
            args.push('arr['+ i +']');
        }
        var result = eval('ctx.fn('+ args.join(',') +')');
        delete ctx.fn;
        return result;
    }
}


Function.prototype.myApply = function(context = window, args){
    if(this == Function.prototype){
        return undefined;
    }

    const fn = Symbol();
    context[fn] = this;
    let result;
    if(Array.isArray(args)){
        result = context[fn](...args);
    } else {
        result = context[fn]();
    }

    delete context[fn];
    return result;
}
//函数柯里化：通俗说就是在进行函数传参的过程中可以通过多次的参数传递，使得整个函数的参数达到饱和的过程

//通过两次传参达到饱和
function FixedParamsCurry(fn){
    var _args = [].slice.call(arguments, 1);
    return function(){
        var newArgs = _args.concat([].slice.call(arguments, 0));
        return fn.apply(this, newArgs);
    }
}

//多次传参达到饱和
function newCurry(fn, length){
    var length = length || fn.length;
    return function(){
        if(arguments.length < length){
            //将当前函数的执行结果与传入的参数连接在一起
            var combine = [fn].concat([].slice.call(arguments, 0));
            return newCurry(FixedParamsCurry.apply(this, combine), length - arguments.length);
        }else{
            return fn.apply(this, arguments);
        }
    }
}

// function add(a, b, c, d){
//     return a + b + c + d;
// }

// var newAdd = FixedParamsCurry(add, 2, 3);
// console.log(newAdd(1,4))

//数组扁平化实现过程: 将一个多维数组，整理成一个一维数组
function isArray(arr){
    return Object.prototype.toString.call(arr) == '[object Array]'
}
function flatten(arr){
    var arr = arr || [];
    var resArr = []
    var len = arr.length;
    for(var i = 0; i < len; i++){
        if(isArray(arr[i])){
            resArr = resArr.concat(flatten(arr[i]));
        }else{
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

// arr = [1,2,3,[5,6,7,[9,1,10]],1,3,[2,4]];
// console.log(flatten(arr));

//惰性函数:主要解决以下的两个问题，对于使用比较频繁的函数，就需要对其进行库函数的封装，
//但是不能够造成全局函数的变量污染
//如对于addEvent的封装
function addEvent(dom, type, handler){
    if(dom.addEventListener){
        dom.addEventLister(type, handler, false);
        addEvent = function(dom, type, handler){
            dom.addEventListener(type, handler, false);
        }
    }else{
        dom.attachEvent('on' + type, handler);
        addEvent = function(dom, type, handler){
            dom.attachEvent('on' + type, handler);
        }
    }
}

//函数组合：将多个函数的功能组合在一起
function compose(){
    var args = Array.prototype.slice.call(arguments);
    var len = args.length - 1;
    return function(x){
        var result = args[len](x);
        while(len--){
            result = args[len](result);
        }
        return result;
    }
}

//记忆函数实现
function memorize(fn){
    var cache = [];
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments);
        if(cache[key]){
            return cache[key];
        }else{
            cache[key] = fn.apply(this, arguments);
            return cache[key];
        }
    }
}

//js单例模式：一个对象只有一个实例， 使用闭包实现
var Singleton = function(name){
    this.name = name;
}

Singleton.prototype.getName = function(){
    return this.name;
}

Singleton.getInstance = (function(name){
    var instance;
    return function(name){
        if(!instance){
            instance = new Singleton(name);
        }
        return instance;
    }
})()

var a = Singleton.getInstance('first');
var b = Singleton.getInstance('seconded');

console.log(b);