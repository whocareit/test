//bidnd函数实现
Function.prototype.myBind = function(){
    var self = this;
    context = [].shift.call(arguments);
    args = [].slice.call(arguments);
    return function(){
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
};

// var obj = {
//     name: 'sdsd'
// }
// var fn = function(a, b, c, d){
//     console.log(this.name);
//     console.log([a, b, c, d]);
// }.bind(obj, 1, 2);

// fn(3,4);

//防抖函数实现,函数频繁发生时应用
function debounce(handler, delay){
    var timer = null
    return function(){
        var self = this, args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function(){
            handler.apply(self, args);
        },delay)
    }
}

//节流函数实现: 防止恶意的点击
function throttle(handler, wait){
    var initTime = 0;
    return function(){
        var nowTime = new Date().getTime();
        if(nowTime - initTime > wait){
            handler.apply(this, arguments);
            initTime = nowTime;
        }
    }
}

//ajax函数封装
function ajax(method, url, data, async,callback){
    var xml;
    if(window.XMLHttpRequest){
        xml = window.XMLHttpRequest();
    } else {
        xml = new ActiveXObject('Microsoft.XMLHTTP');
    }
    method = method.toUpperCase();

    if(method === 'GET'){
        xml.open(method, url + '?' + data, async);
        xml.send();
    }
    if(method === 'POST'){
        xml.open(method, url, async);
        xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xml.send(data);
    }

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            //如果返回成功就将返回的字符串放在这个回调函数中
            callback(xml.responseText);
        }
    }
}

//继承的实现方式

//1.原型继承
function Animal(name){
    this.name = name || 'Animal';
    this.sleep = function(){
        console.log(this.name + 'sleeping');
    }
}
Animal.prototype.eat = function (){
    console.log(this.name + 'eating');
}


function Cat(){

}
// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';

// var cat = new Cat();
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat.eat());


//构造继承
function Person(name){
    this.name = name || 'default';
    this.sleep = function(){
        console.log(this.name + '正在睡觉')
    }
}

Person.prototype.eat = function(food){
    console.log(this.name + '正在吃' + food)
}

function Student(name){
    Person.call(this);
    this.name = name || 'Tom';
}

var student = new Student();
console.log(student.sleep());
// console.log(student.eat());



