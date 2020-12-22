//bind
//描述：该方法会创建一个新的函数，在bind方法被调用时，这个新函数的this被指定为bind方法中的第一个参数
//其余参数将作为新函数的参数被调用
//使用案列

//1. 创建绑定函数
// const name = 'global name'
// const obj = {
//     name: 'name',
//     fun: function(){
//         console.log(this.name);
//     }
// }
// const x = obj.fun;
// console.log(x());

// const b = x.bind(obj)
// console.log(b());

//2. 作为偏函数：使一个函数拥有预设的初始函数
function list(){
    return Array.prototype.slice.call(arguments);
}
function add(){
    let sum = 0;
    Array.prototype.slice.call(arguments).forEach(item => {
        sum += item;
    });
    return sum;
}
function mul(){
    let sum = 1;
    [...arguments].forEach(item => {
        sum *= item;
    })
    return sum;
}
const newList = list.bind(null, 27);
const newAdd = add.bind(null,10);
const newMul = mul.bind(null, 10);
// console.log(newList(4,5,6));
// console.log(newAdd(1,2,3,4));
// console.log(newMul(1,2,3,4));

//深度克隆
function deepClone(origin, target){
    var target = target || {},
    toStr = Object.prototype.toString,
    objArr = "[object Array]";
    for(var item in origin){
        if(origin.hasOwnProperty(item)){
            if(origin[item] !== null && typeof(origin[item]) == 'object'){
                if(toStr.call(origin[item]) == objArr){
                    console.log('array')
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
// let obj1 = {};
// let obj2 = {
//     num: {
//         sum: {
//             abc: 123 
//         },
//         shj: [
//             456
//         ]
//     }
// }
// console.log(deepClone(obj2, obj1));
// console.log(obj1 == obj2)

//类数组
//特点
//1. 属性要为索引(数字)属性，必须要有length属性，最好加上push方法
//push方法原理:
// Array.prototype.push = function(target){
//     obj[obj.length] = target;
//     obj.length++;
// }
//常用的类数组，获取DOM节点时，生成的数组为类数组
var obj = {
    '2': 'a',
    '3': 'b',
    'length': 2,
    'push': Array.prototype.push,
    'splice': Array.prototype.splice
}
obj.push('c')
obj.push('d');

// console.log(obj)

//js中区分所有的数据类型方式
//思路：1. 判断其是否为null  2. 判断其是原始数据类型还是引用数据类型 3. 将引用数据类型进行细分
function type(target){
    let template = {
        "[object Array]": "obj---array",
        "[object Boolean]": "obj---boolean",
        "[object Number]": "obj---number",
        "[object Object]": "obj---obj",
        "[object String]": "obj---string"
    }
    if(target == null){
        return "null";
    }
    if(typeof(target) == "object"){
        let toStr = Object.prototype.toString.call(target);
        return template[toStr];
    }else{
        return typeof(target);
    }
}
// console.log(type(123))

//数组去重
//采用对象去存储，相比于数组来说，能够节约很多的时间
//在这里的话，不能使用obj[this[i]] = this[i],如果传入的值是0，则还是会走里面的逻辑，这样就不能去除0
Array.prototype.unique = function(){
    let len = this.length,
        obj = {},
        arr = [];
    for(let i = 0; i < len; i++){
        if(!obj[this[i]]){
            obj[this[i]] =  '123';
            arr.push(this[i]);
        }
    }
    return arr;
}
// const newArr = [1,2,1,2,3,4,5,'q','q','a','a'];
// console.log(newArr.unique());