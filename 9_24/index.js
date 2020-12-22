//深度克隆
function deepClone(origin, target){
    var target = target || {},
    toStr = Object.prototype.toString,
    objArray = "[object Array]";
    for(let item in origin){
        if(origin.hasOwnProperty(item)){
            if(origin[item] !== null && typeof(origin[item]) == 'object'){
                toStr.call(origin[item]) == objArray ? target[item] = [] : target[item] = {};
                deepClone(origin[item], target[item]);
            }else{
                target[item] = origin[item];
            }
        }
    }
    return target;
}
let obj1 = {};
let obj2 = {
    num: {
        sum: {
            abc: 123 
        },
        shj: [
            456
        ]
    }
}
// console.log(deepClone(obj2, obj1));
//数组去重
Array.prototype.unique = function(){
    let len = this.length,
        arr = [],
        obj = {};
    for(let i = 0; i < len; i++){
        if(!obj[this[i]]){
            obj[this[i]] = '123';
            arr.push(this[i]);
        }
    }
    return arr;
}
let arr = [1,2,1,2,3,1,3,'a','a',0,0];
// console.log(arr.unique());

//作用域链生成过程与闭包
//作用域链生成过程： 
// function f(){
//     console.log('a');
//     function b(){
//         console.log('b');
//         function c(){
//             console.log('c');
//         }
//         c();
//     }
//     b()
// }
// f()
//作用域链的生成其实就是一个链式访问内部作用域的一个过程，如同上面的实例所示，其生成一个作用域的过程如下：
//1.  f定义阶段  f.[[scope]]      scope chain    0 --> GO(全局对象)

//2. a 执行阶段  f.[[scope]]      scope chain    0 --> a函数的AO
//                                              1 --> GO
//   b 定义阶段   b.[[scope]]     scope chain    0 --> f函数的AO
//                                              1 --> GO

//3. b 执行阶段   b.[[scope]]     scope chain    0 --> b函数的AO
//                                              1 --> f函数的AO
//                                              2 --> AO
//   c定义阶段    c.[[scope]]     scope chain    0 --> b函数的AO
//                                              1 --> f函数的AO
//                                              2 --> AO

//4.  c执行阶段   c.[[scope]]     scope chain    0 --> c函数的AO
//                                              1 --> b函数的AO
//                                              2 --> f函数的AO
//                                              3 --> AO
//当所有的函数执行完之后，就会进行依次的销毁，销毁方式是从作用域链的最顶端，依次进行释放

//闭包产生原因：当前函数被保存到了函数的外部，从而导致其所在得当前作用域也被保存到了外部，进而会影响到当前作用域的变量

//原型
//1. 对象的生成过程：

//继承方式
// 1. 原型链上的继承
// 2. 使用构造函数来实现继承，使用call或者是apply
// 3. 继承中的圣杯模式继承
const inherit = (function(){
    function F(){}
    return function(Origin, Target){
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}())

// function bar(){
//     foo.call(null, arguments);
// }
// function foo(){
//     console.log(arguments);
// }

// bar(1,2,3,4,5)

// const g = (
//     function test(){
//         return '1';
//     },
//     function bar(){
//         return 2;
//     }
// )();
// console.log(typeof g);

// var name = 'Jay';

// function Person(name){
//     this.name = name;
//     console.log(this.name);
// }
// var a = Person('Tom');
// console.log(name);
// console.log(a);
// var b = new Person("Michal");
// console.log(name);
// console.log(b);

function paddingNum(number){
    return number.toLocaleString();
}
console.log(paddingNum(-456454546.12));