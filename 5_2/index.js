//EventEmitter(事件触发器)
//常用的五个函数 addListener(event, listenner) removeListener(event, listener)
// setMaxListener(n)  once(event, listenner) emit(event, [args1], [args2], [....])

//基本使用
var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function(){
    console.log('监听器1');
}

//监听器2
var listener2 = function() {
    console.log('监听器2');
}

// //绑定connection事件，处理的函数为listener1
// eventEmitter.addListener('connection', listener1);

// //绑定connection事件，调用一次，处理函数为listener2
// eventEmitter.once('connection', listener2)

// //处理connection事件
// eventEmitter.emit('connection');

// //处理connection事件
// eventEmitter.emit('connection');

//洗牌算法
function disorder(array){
    const length = array.length;
    let current = length - 1;
    let random;
    while(current > -1){
        random = Math.floor(length*Math.random());
        [array[current], array[random]] = [array[random], array[current]];
        current--;
    }
    return array;
}

// console.log(disorder([1,2,3,4,5,6,7,8,9,10,11,12,13]))

//函数柯里化实现方式
function currying(fn, ...args){
    if(args.length > fn.length){
        return fn(...args);
    }else{
        return (...args2) => currying(fn, ...args, ...args2);
    }
}

//jsonp实现
// (function (window, document){
//     "user strict";
//     var jsonp = function(url, data, callback){
//         //1.将传入的data数据转化为url字符串形式
//         var dataString = url.indexOf('?') == -1 ? '?' : '&';
//         for(var key in data){
//             dataString += key + '=' + data[key] + '&';
//         }

//         //2.处理url中的回调函数
//         //cnFuncName回调函数的名字： my_json_cb_名字的前缀+随机数(把小数点去掉后)
//         var cbFunctName = 'my_json_cb_' + Math.random().toString().replace('.','');
//         dataString += 'callback=' + cbFunctName;

//         //3.创建一个script标签并插入到页面中
//         var scriptTag = document.createElement('script');
//         scriptTag.src = url + dataString;

//         //4.挂载回调函数
//         window[cbFunctName] = function (data) {
//             callback(data);
//             //处理完回调函数后，删除jsonp的script标签
//             document.body.removeChild(scriptTag);
//         }

//         document.body.appendChild(scriptTag);
//     }

//     window.$jsonp = jsonp;
// })(window, document)


//继承的几种实现方式

//1.原型继承
function People(){
    this.type = 'people'
}

People.prototype.eat = function () {
    console.log('eating foods')
}

//1.原型继承
// function Man(name){
//     this.name = name;
//     this.color = 'green';
// }
// Man.prototype = new People();

//2.构造继承： 在子类构造器中调用父类的构造函数
// function Man(name){
//     People.call(this);
//     this.name = name;
//     this.color = 'green';
// }

//组合继承: 使用构造函继承父类参数，使用原型继承继承父类函数
// function Man(name){
//     People.call(this);
//     this.name = name;
//     this.color = 'green';
// }

// Man.prototype = People.prototype;

//4.寄生组合继承: 子类继承一个由父类原型生成的空对象
// function Man(name){
//     People.call(this);
//     this.name = name;
//     this.color = 'green';
// }

// Man.prototype = Object.create(People.prototype, {
//     constructor: {
//         value: Man
//     }
// })

//inherits函数:
function inherits(ctor, superCtor){
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    })
}

//instanceof实现
function Myinstanceof (target, origin) {
    const proto = target._proto_;
    if(proto){
        if(origin.prototype === proto){
            return true;
        }else{
            return Myinstanceof(proto, origin);
        }
    }else{
        return false;
    }
}

//块级作用域

//1.内层变量覆盖了外层变量
// var tmp = new Date();

// function f() {
//     console.log(tmp);
//     if(false){
//         var tmp = 'hello world';
//     } 
// }
// f();

//2.用来计数的循环变量写了为全局变量
// var s = 'hello';

// for(var i = 0; i < s.length; i++){
//     console.log(s[i]);
// }

// console.log(i)

// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

{
    let a = 'secret';
    function f() {
      return a;
    }
    console.log(f())
  }

  {
      let a = 'secret';
      let f = function(){
          return a;
      }
      console.log(f());
  }