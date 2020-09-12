// function bar(a){
//     console.log(a,b);
//     var b = 3;
//     var a = 1;
//     console.log(a,b);
//     function a(){

//     }
//     console.log(a);
// }
// bar(3);

// console.log(1)
// setTimeout(function(){
//     console.log(2);
// },0)

// new Promise(() => {
//     console.log(3);
//     setTimeout(() => {
//         console.log(4);
//     })
// })
// console.log(5);

// let str1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: {
//         e: 5
//     }
// }
// let str2 = str1;
// str1.d.e = 4;
// console.log(str1,str2)
// console.log(str2)

// function unique(arr){
//     if(! Array.isArray(arr)){
//        console.log('type error');
//        return;
//     }
//     arr = arr.sort();
//     console.log(arr);
//     let array = [arr[0]];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] !== arr[i - 1]){
//            array.push(arr[i]);
//         }
//     }
//     return array;
// }

// console.log(unique([12,3,7,3,7,34,9,3,9]));
// let arr = [];
// console.log(typeof arr)

//deepclone
// function deepclone(target, origin){
//     var target = target || {},
//     toStr = Object.prototype.toString;
//     arrStr = '[object Array]';
//     for(var item in origin){
//         if(origin.hasOwnProperty(item)){
//             if(origin[item] !== null && typeof(origin[item]) == 'object'){
//                 if(toStr.call(origin) === arrStr){
//                     target[item] = [];
//                 }else{
//                     target[item] = {};
//                 }
//                 deepclone(target[item],origin[item]);
//             }else{
//                 target[item] = origin[item];
//             }
//         }
//     }
// }
//将函数参数分为两个部分
function FixedParame(fn){
    var _args = [].slice.call(arguments, 1);
    return function(){
        var newArgs = _args.concat([].slice.call(arguments, 0));
        return fn.apply(this, newArgs);
    }
}
function newCurry(fn, length){
    var length = length || fn.length;
    return function(){
        if(arguments.length < length){
            var cobined = [fn].concat([].slice.call(arguments, 0));
            return newCurry(FixedParame.apply(this, cobined),length - arguments.length);
        }else{
            return fn.apply(this, arguments);
        }
    }
}

// function compose(){
//     //将类数组转化为数组，这样才能使用数组方法
//     var args = Array.prototype.slice.call(arguments);
//     var len = args.length - 1;
//     return function(x){
//         var result = args[len](x);
//         while(len--){
//             result = args[len](result);
//         }
//         return result;
//     }
// }

// function throttle(handler, wait){
//     var initTime = 0;
//     return function (e){
//         var nowTime = new Date().getTime();
//         if(nowTime - initTime > wait){
//             handler.apply(this, arguments);
//             initTime = nowTime;
//         }
//     }
// }

// function debounce(handler, delay){
//     var timer = null;
//     return function(){
//         var _self = this, _args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             handler.apply(_self, _args);
//         },delay);
//     }
// }

// function flatten(){
//     var arr = arr || [];
//     var toStr = Object.prototype.toString;
//     this.forEach(item => {
//         return toStr.call(item) == '[object Array]' ? arr = arr.concat(item.flatten()): arr.push(item);
//     })
// }

// var xmlhttp;
// if(window.XMLHttpRequest){
//     xmlhttp = new XMLHttpRequest();
// }else{
//     xmlhttp = new ActiveXObject("Microsoft.XMlHTTP");
// }

//1.原型链继承
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// function Student(school){
//     this.school = school;
// }

// Student.prototype = new Person();

// const student = new Student();

//构造函数继承
// function Car(name, color, size){
//     this.name = name;
//     this.color = color;
//     this.size = size;
// }

// function Baoma(name, color, size, model){
//     Car.call(this, name, color, size);
//     this.model = model;
// }

//3.组合继承，使用原型链以及构造函数来实现实例属性的继承

// function Animao(type, size, food){
//     this.type = type;
//     this.size = size;
//     this.food = food;
// }

// Animao.prototype.sayName = funciton(){
//     console.log(this.name);
// }

// function Dog(type, size, food, age){
//     Animao.call(this, type, size, food);
//     this.age = age;
// }

// Dog.prototype = new Animao();


//圣杯模式继承
var inherit = (function(){
    var F = function(){};
    return function(Target, Origin){
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uper = Origin.prototype;
    }
})()

function inheritPrototype(target, origin){
    var prototype = Object.create(origin.prototype);
    prototype.constructor = target;
    target.prototype = prototype;
}