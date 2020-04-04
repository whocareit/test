//数据机构之栈,使用es6实现

//1.首先实现栈的结构
class Stack{
    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.getCount() - 1];
    }

    getCount(){
        return this.stack.length;
    }

    isEmpty(){
        return this.getCount() === 0;
    }
}

//使用栈结构来实现括号匹配问题
function isTrue(s){
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] < 0){
            stack.push(s[i]);
        }else{
            let last = stack.pop();
            if(map[last] + map[s[i] !== 0]){
                return false;
            }
        }
    }
    if(stack.length > 0) return false;
    return true;
}

//字符串反转
// let str1 = '123456789lk';
// console.log(typeof str1.split('').reverse().join(''));

//将数字 12345678 转化成 RMB 形式 如： 12,345,678
function rmbContent(s){
    let arr;
    if(typeof s == 'string'){
        arr = s.split('');
    }else if(typeof s == 'number'){
        arr = s.toString().split('');
    }else {
        throw new Error('the parmas is not string or number')
    }
    let str = '';
    for(let i = 1; i <= arr.length; i++){
        str += arr[i - 1];
        if(i % 3 === 0 && i !== arr.length){
            str += ','
        }
    }
    console.log(str)
    return str.split('').reverse().join('');
}
// console.log(rmbContent(123456789))

//随机数生成
// function ran(){
//     let nums = [];
//     while(nums.length < 5){
//         let num = Math.floor(Math.random()*10 + 1);
//         if(!nums.includes(num)){
//             nums.push(num);
//         }
//     }
//     return nums;
// }
// console.log(ran());

// function f1(){
//     var tmp = 1;
//     this.x = 3;
//     console.log(tmp);
//     console.log(this.x);
// }
// var obj = new f1();
// console.log(obj.x);
// console.log(f1());

console.log('5' + 3);
console.log('5' + '3');
console.log(5 - 2  + '3');
console.log('5' - 3);
console.log('5' - '3');
